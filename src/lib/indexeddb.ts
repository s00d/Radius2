interface ProxyConfig {
  protocol: string
  host: string
  port: number
  username?: string
  password?: string
}

const DB_NAME = 'RadiusDB'
const DB_VERSION = 2 // Увеличиваем версию для принудительного обновления
const STORE_NAME = 'proxy_config'
const SESSIONS_STORE = 'sessions'

// Инициализация базы данных
export const initDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    
    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)
    
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      
      // Создаем хранилище для конфигурации прокси
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' })
        store.createIndex('id', 'id', { unique: true })
      }
      
      // Создаем хранилище для сессий
      if (!db.objectStoreNames.contains(SESSIONS_STORE)) {
        const store = db.createObjectStore(SESSIONS_STORE, { keyPath: 'id' })
        store.createIndex('id', 'id', { unique: true })
      }
    }
  })
}

// Сохранение конфигурации прокси
export const saveProxyConfig = async (config: ProxyConfig): Promise<void> => {
  const db = await initDB()
  const transaction = db.transaction([STORE_NAME], 'readwrite')
  const store = transaction.objectStore(STORE_NAME)
  
  return new Promise((resolve, reject) => {
    const request = store.put({ id: 'proxy_config', ...config })
    
    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
  })
}

// Получение конфигурации прокси
export const getProxyConfig = async (): Promise<ProxyConfig | null> => {
  const db = await initDB()
  const transaction = db.transaction([STORE_NAME], 'readonly')
  const store = transaction.objectStore(STORE_NAME)
  
  return new Promise((resolve, reject) => {
    const request = store.get('proxy_config')
    
    request.onsuccess = () => {
      const result = request.result
      if (result) {
        // Удаляем id из результата
        const { id, ...config } = result
        resolve(config)
      } else {
        resolve(null)
      }
    }
    request.onerror = () => reject(request.error)
  })
}

// Удаление конфигурации прокси
export const clearProxyConfig = async (): Promise<void> => {
  const db = await initDB()
  const transaction = db.transaction([STORE_NAME], 'readwrite')
  const store = transaction.objectStore(STORE_NAME)
  
  return new Promise((resolve, reject) => {
    const request = store.delete('proxy_config')
    
    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
  })
}

// Проверка наличия конфигурации прокси
export const hasProxyConfig = async (): Promise<boolean> => {
  const config = await getProxyConfig()
  return config !== null
}

// Генерация уникального ID сессии
export const generateSessionId = (): string => {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
}

// Получение или создание сессии
export const getOrCreateSession = async (): Promise<string> => {
  const db = await initDB()
  const transaction = db.transaction([SESSIONS_STORE], 'readwrite')
  const store = transaction.objectStore(SESSIONS_STORE)
  
  return new Promise((resolve, reject) => {
    const request = store.get('current_session')
    
    request.onsuccess = () => {
      if (request.result) {
        resolve(request.result.sessionId)
      } else {
        // Создаем новую сессию
        const sessionId = generateSessionId()
        store.put({ id: 'current_session', sessionId, createdAt: Date.now() })
        resolve(sessionId)
      }
    }
    request.onerror = () => reject(request.error)
  })
}

// Очистка сессии
export const clearSession = async (): Promise<void> => {
  const db = await initDB()
  const transaction = db.transaction([SESSIONS_STORE], 'readwrite')
  const store = transaction.objectStore(SESSIONS_STORE)
  
  return new Promise((resolve, reject) => {
    const request = store.delete('current_session')
    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
  })
} 