import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  console.log('🔧 UV-Config Route: Generating config for ID:', id)

  // Формируем bare URL с ID
  const bareUrl = `/api/bare/${id}/`
  console.log('🔧 UV-Config Route: Using bare URL:', bareUrl)

  // Формируем конфигурацию UV
  const uvConfig = {
    prefix: `/uv/service/${id}/`,
    bare: bareUrl,
    encodeUrl: 'Ultraviolet.codec.xor.encode',
    decodeUrl: 'Ultraviolet.codec.xor.decode',
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: `/uv/service/${id}/uv.config.js`,
    sw: '/uv/uv.sw.js',
  }

  // Отправляем конфигурацию как JavaScript
  const configScript = `/*global Ultraviolet*/
self.__uv$config = ${JSON.stringify(uvConfig, null, 2)};`

  return new NextResponse(configScript, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'no-cache'
    }
  })
}
