import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  console.log('🔧 UV-SW Route: Generating service worker for ID:', id)

  // Формируем bare URL с ID
  const bareUrl = `/api/bare/${id}/`
  console.log('🔧 UV-SW Route: Using bare URL:', bareUrl)

  // Генерируем service worker скрипт
  const swScript = `/*global UVServiceWorker,__uv$config*/
/*
 * Stock service worker script.
 * Users can provide their own sw.js if they need to extend the functionality of the service worker.
 * Ideally, this will be registered under the scope in uv.config.js so it will not need to be modified.
 * However, if a user changes the location of uv.bundle.js/uv.config.js or sw.js is not relative to them, they will need to modify this script locally.
 */
importScripts('/uv/uv.bundle.js');
importScripts('/uv/service/${id}/uv.config.js');
importScripts(__uv$config.sw || '/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});`

  return new NextResponse(swScript, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'no-cache'
    }
  })
}
