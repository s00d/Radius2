'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Settings, Save, Trash2, Check, Globe } from 'lucide-react'
import store from 'store2'

interface ProxyConfig {
  id: string
  name: string
  protocol: string
  host: string
  port: number
  username: string
  password: string
  description: string
}

interface ProxyList {
  proxies: ProxyConfig[]
}

export default function ProxyEditor() {
  const [proxyList, setProxyList] = useState<ProxyConfig[]>([])
  const [selectedProxy, setSelectedProxy] = useState<ProxyConfig | null>(null)
  const [currentProxy, setCurrentProxy] = useState<ProxyConfig | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const [loading, setLoading] = useState(false)

  // Загружаем список прокси и текущий прокси при монтировании
  useEffect(() => {
    const loadData = async () => {
      try {
        // Загружаем список прокси из API
        const response = await fetch('/api/proxies')
        let proxyListData: ProxyConfig[] = []
        if (response.ok) {
          const data: ProxyList = await response.json()
          proxyListData = data.proxies
          setProxyList(data.proxies)
          console.log('📋 Loaded proxy list:', data.proxies.length, 'proxies')
        } else {
          console.error('Failed to load proxy list')
        }

        // Загружаем текущий прокси из store
        const savedProxy = store.get('proxyConfig')
        if (savedProxy) {
          // Находим соответствующий прокси в списке
          const matchingProxy = proxyListData.find((p: ProxyConfig) => 
            p.host === savedProxy.host && 
            p.port === savedProxy.port &&
            p.username === savedProxy.username
          )
          
          if (matchingProxy) {
            setCurrentProxy(matchingProxy)
            setIsEnabled(true)
          } else {
            // Если не нашли в списке, создаем кастомный объект
            setCurrentProxy({
              id: 'custom',
              name: 'Custom Proxy',
              protocol: savedProxy.protocol || 'http',
              host: savedProxy.host,
              port: savedProxy.port,
              username: savedProxy.username || '',
              password: savedProxy.password || '',
              description: 'Custom proxy configuration'
            })
            setIsEnabled(true)
          }
        }
      } catch (error) {
        console.error('Failed to load proxy data:', error)
      }
    }

    loadData()
  }, [])

  const handleSelectProxy = async (proxy: ProxyConfig) => {
    setLoading(true)
    try {
      // Сохраняем выбранный прокси в store
      const proxyData = {
        protocol: proxy.protocol,
        host: proxy.host,
        port: proxy.port,
        username: proxy.username || undefined,
        password: proxy.password || undefined
      }
      
      store.set('proxyConfig', proxyData)
      
      // Отправляем данные в service worker
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'SET_PROXY',
          proxy: proxyData
        })
      }
      
      setCurrentProxy(proxy)
      setIsEnabled(true)
      setIsEditing(false)
      console.log('✅ Proxy selected:', proxy.name)
      
      // Показываем уведомление
      console.log('✅ Proxy config saved and will be applied on next request')
    } catch (error) {
      console.error('Failed to select proxy:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleClearProxyConfig = async () => {
    setLoading(true)
    try {
      // Удаляем из store
      store.remove('proxyConfig')
      
      setCurrentProxy(null)
      setIsEnabled(false)
      setIsEditing(false)
      console.log('Proxy config cleared')
      
      // Показываем уведомление
      console.log('✅ Proxy config cleared and will be applied on next request')
    } catch (error) {
      console.error('Failed to clear proxy config:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Выбор прокси
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isEditing ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Прокси:</span>
              <span className={`text-sm ${isEnabled ? 'text-green-600' : 'text-gray-500'}`}>
                {isEnabled ? 'Включен' : 'Отключен'}
              </span>
            </div>
            {isEnabled && currentProxy && (
              <div className="text-xs text-gray-600 bg-gray-100 p-2 rounded">
                <div className="font-medium">{currentProxy.name}</div>
                <div>{currentProxy.protocol}://{currentProxy.host}:{currentProxy.port}</div>
                {currentProxy.description && (
                  <div className="text-gray-500 mt-1">{currentProxy.description}</div>
                )}
              </div>
            )}
            <div className="flex gap-2">
              <Button
                onClick={() => setIsEditing(true)}
                size="sm"
                variant="outline"
                disabled={loading}
              >
                {isEnabled ? 'Изменить' : 'Выбрать'}
              </Button>
              {isEnabled && (
                <Button
                  onClick={handleClearProxyConfig}
                  size="sm"
                  variant="destructive"
                  disabled={loading}
                >
                  Отключить
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-sm font-medium mb-2">Выберите прокси:</div>
            {proxyList.map((proxy) => (
              <div
                key={proxy.id}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedProxy?.id === proxy.id
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedProxy(proxy)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{proxy.name}</div>
                    <div className="text-xs text-gray-600">
                      {proxy.protocol}://{proxy.host}:{proxy.port}
                    </div>
                    {proxy.description && (
                      <div className="text-xs text-gray-500 mt-1">{proxy.description}</div>
                    )}
                  </div>
                  {selectedProxy?.id === proxy.id && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </div>
              </div>
            ))}
            
            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => {
                  if (selectedProxy) {
                    handleSelectProxy(selectedProxy)
                  }
                }}
                size="sm"
                disabled={!selectedProxy || loading}
              >
                {loading ? 'Сохранение...' : 'Выбрать'}
              </Button>
              <Button
                onClick={() => {
                  setIsEditing(false)
                  setSelectedProxy(null)
                }}
                size="sm"
                variant="outline"
                disabled={loading}
              >
                Отмена
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
