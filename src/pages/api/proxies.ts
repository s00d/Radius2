import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Читаем конфигурационный файл
    const configPath = path.join(process.cwd(), 'src/config/proxies.json')
    const configData = fs.readFileSync(configPath, 'utf8')
    const config = JSON.parse(configData)

    console.log('📋 API: Returning proxy list')
    res.status(200).json(config)
  } catch (error) {
    console.error('❌ API: Failed to load proxy config:', error)
    res.status(500).json({ error: 'Failed to load proxy configuration' })
  }
} 