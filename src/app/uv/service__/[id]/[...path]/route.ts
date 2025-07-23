import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string, path: string[] } }
) {
  const { id, path } = params

  console.log('🔧 UV-Service Route: Request for ID:', id, 'Path:', path)

  // Получаем оригинальный URL и извлекаем закодированную часть
  const originalUrl = request.url
  const urlObj = new URL(originalUrl)
  const pathname = urlObj.pathname
  
  // Извлекаем часть после /uv/service/proxy1/
  const servicePrefix = `/uv/service/${id}/`
  const encodedPath = pathname.substring(servicePrefix.length)
  
  console.log('🔧 UV-Service Route: Original pathname:', pathname)
  console.log('🔧 UV-Service Route: Encoded path:', encodedPath)

  // Формируем URL для перенаправления на bare сервер
  const bareUrl = `/api/bare/${id}/`
  const targetUrl = bareUrl + encodedPath

  console.log('🔧 UV-Service Route: Redirecting to:', targetUrl)

  // Перенаправляем запрос на bare сервер
  const baseUrl = urlObj.origin
  const redirectUrl = baseUrl + targetUrl

  console.log('🔧 UV-Service Route: Full redirect URL:', redirectUrl)

  return NextResponse.redirect(redirectUrl)
}
