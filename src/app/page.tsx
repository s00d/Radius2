'use client'
import { Input } from '@/components/ui/input'
import { Flame, Radius, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import store from 'store2'
import ProxyEditor from '@/components/proxy-editor'
import { getProxyConfig } from '@/lib/indexeddb'

export default function Home() {
  const router = useRouter()
  const [splashText, setSplashText] = useState<string>('')

  useEffect(() => {

    fetch('/splash.json')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setSplashText(data[randomIndex].splash);
      })
      .catch(error => console.error('Error fetching splash text:', error));

  }, [])

  return (
    <div>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <Radius className="h-16 w-16 rotate-180" />
          <h1 className="text-6xl font-semibold">Radius</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Input
              className="w-[26rem] px-9 h-12 rounded-lg"
              placeholder="Search the web"
              onKeyDown={async (e) => {
                if (e.key !== 'Enter') return

                // Проверяем, что target существует и имеет value
                const target = e.target as HTMLInputElement
                if (!target || !target.value) {
                  console.error('target is null or has no value')
                  return
                }

                // Получаем текущий прокси и его ID
                let proxyId = 'direct'
                try {
                  const proxyConfig = await getProxyConfig()
                  if (proxyConfig) {
                    const response = await fetch('/api/proxies')

                    if (response.ok) {
                      const data = await response.json()
                      const matchingProxy = data.proxies.find((p: any) =>
                        p.host === proxyConfig.host &&
                        p.port === proxyConfig.port &&
                        p.username === proxyConfig.username
                      )
                      if (matchingProxy) {
                        proxyId = matchingProxy.id
                      }
                    }
                  }
                } catch (error) {
                  console.log('Failed to get proxy ID, using direct')
                }

                // Формируем URL с ID прокси в пути
                const searchUrl = btoa(target.value)

                const url = `/go/${proxyId}/${searchUrl}`
                router.push(url)
              }}
            />
            <Search className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 left-3" />
          </div>
        </div>
         <p style={{ fontSize: '1rem', fontWeight: 'normal', marginTop: '0.4rem' }}>{splashText}</p>
      </div>

      {/* Редактор прокси */}
      <div className="fixed bottom-4 right-4">
        <ProxyEditor />
      </div>
    </div>
  )
}
