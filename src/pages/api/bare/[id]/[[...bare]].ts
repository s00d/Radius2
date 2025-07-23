import { NextApiRequest, NextApiResponse } from 'next'
import { createBareServer } from '@tomphttp/bare-server-node'
import { ProxyManager } from '../../proxy-manager'

// Создание bare сервера с прокси для конкретного ID
async function createBareServerWithId(id: string) {
  console.log('🚀 API: Creating bare server for ID:', id)

  // Создаем менеджер прокси
  const proxyManager = new ProxyManager()

  // Получаем прокси конфигурацию по ID
  let proxyConfig = null
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/proxies`)
    if (response.ok) {
      const data = await response.json()
      const proxy = data.proxies.find((p: any) => p.id === id)
      if (proxy) {
        proxyConfig = {
          host: proxy.host,
          port: proxy.port,
          username: proxy.username,
          password: proxy.password
        }
        console.log('🔧 API: Found proxy config for ID:', id, proxyConfig.host + ':' + proxyConfig.port)
      }
    }
  } catch (error) {
    console.log('⚠️ API: Failed to get proxy config for ID:', id, error)
  }

  // Настраиваем прокси
  if (proxyConfig) {
    proxyManager.setProxy(proxyConfig)
  } else {
    console.log('⚠️ API: No proxy config available for ID:', id)
    proxyManager.setProxy(null)
  }

  // Создаем агенты
  const httpAgent = proxyManager.getHttpAgent()
  const httpsAgent = proxyManager.getHttpsAgent()

  return createBareServer(`/api/bare/${id}/`, {
    logErrors: true,
    localAddress: undefined,
    maintainer: {
      email: 'contact@proudparrot2.tech',
      website: 'https://github.com/proudparrot2/'
    },
    httpAgent: httpAgent || undefined,
    httpsAgent: httpsAgent || undefined
  })
}

export const config = {
  api: {
    externalResolver: true
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Получаем ID из URL
  const id = req.query.id as string

  console.log('🚀 API: Received request to /api/bare/' + id)
  console.log('🚀 API: Request method:', req.method)
  console.log('🚀 API: Request URL:', req.url)
  console.log('🚀 API: Query params:', req.query)

  // Проверяем, что это GET запрос
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Создаем bare сервер для этого ID
  const bare = await createBareServerWithId(id)

  // Проверяем, что bare сервер создан
  if (!bare) {
    console.error('❌ API: Failed to create bare server')
    return res.status(500).json({ error: 'Failed to create bare server' })
  }

  // Обрабатываем запрос через bare сервер
  if (req.query.bare && Array.isArray(req.query.bare)) {
    console.log('🔧 API: Bare path:', req.query.bare.join('/'))
  }

  await bare.routeRequest(req, res)
}
