'use client'
import Sidebar from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { encodeXor, formatSearch } from '@/lib/utils'
import ProxyStatus from '@/components/proxy-status'
import { useEffect, useRef, useState } from 'react'
import * as Lucide from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface ContentWindow extends Window {
  __uv$location: Location
}

export default function Route({ params }: { params: { id: string, route: string[] } }) {
  const ref = useRef<HTMLIFrameElement>(null)
  const [open, setOpen] = useState(false)
  const proxyId = params.id
  const route = params.route[0]

  const [tabIcon, setTabIcon] = useState('')
  const [tabName, setTabName] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [showIframe, setShowIframe] = useState(false)

  useEffect(() => {
    const initServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          // Регистрируем service worker с ID в пути
          const swUrl = `/uv/service/${proxyId}/sw.js`
          const registration = await navigator.serviceWorker.register(swUrl, {
            scope: `/uv/service/${proxyId}/`
          })

          console.log('✅ Service Worker registered:', registration)
          console.log('🔧 Using proxy ID:', proxyId)

          // Показываем iframe и скрываем лоадер
          setShowIframe(true)
          setIsLoading(false)

        } catch (error) {
          console.error('Service worker registration failed:', error)
          // Показываем iframe даже если SW не работает
          setShowIframe(true)
          setIsLoading(false)
        }
      } else {
        // Если service worker не поддерживается
        setShowIframe(true)
        setIsLoading(false)
      }
    }

    initServiceWorker()
  }, [route, proxyId])

  useEffect(() => {
    // Загружаем iframe только после того, как он показан
    if (showIframe && ref.current) {
      const loadIframeWithProxy = async () => {
        let uvUrl = `/uv/service/${proxyId}/` + encodeXor(formatSearch(atob(decodeURIComponent(route))))

        console.log('🔧 Interface: Loading iframe with URL:', uvUrl)
        ref.current!.src = uvUrl
      }

      loadIframeWithProxy()
    }
  }, [showIframe, route, proxyId])

  function handleLoad() {
    console.log('🔧 Interface: handleLoad called')

    if (!ref.current || !ref.current.contentWindow) {
      console.log('🔧 Interface: No iframe or contentWindow')
      return
    }

    const contentWindow = ref.current.contentWindow as ContentWindow
    console.log('🔧 Interface: ContentWindow:', contentWindow)

    // Функция для попытки получения заголовка
    const tryGetTitle = () => {
      try {
        // Проверяем, существует ли __uv$location
        if ('__uv$location' in contentWindow && contentWindow.__uv$location) {
          console.log('🔧 Interface: __uv$location found:', contentWindow.__uv$location)
          setTabName(contentWindow.document.title)
          setTabIcon((contentWindow.document.querySelector("link[rel*='icon']") as HTMLLinkElement)?.href || `${contentWindow.__uv$location.origin}/favicon.ico`)
          setIsLoading(false)
          return true
        } else {
          console.log('🔧 Interface: No __uv$location found, trying direct title')
          const title = contentWindow.document.title
          console.log('🔧 Interface: Direct title:', title)
          if (title && title !== '') {
            setTabName(title)
            setTabIcon((contentWindow.document.querySelector("link[rel*='icon']") as HTMLLinkElement)?.href || '')
            setIsLoading(false)
            return true
          }
        }
      } catch (error) {
        console.log('🔧 Interface: Error getting title:', error)
      }
      return false
    }

    // Пробуем сразу
    if (!tryGetTitle()) {
      // Если не получилось, пробуем через интервалы
      let attempts = 0
      const maxAttempts = 2
      const interval = setInterval(() => {
        attempts++
        console.log(`🔧 Interface: Retry attempt ${attempts}/${maxAttempts}`)

        if (tryGetTitle() || attempts >= maxAttempts) {
          clearInterval(interval)
          if (attempts >= maxAttempts) {
            console.log('🔧 Interface: Max attempts reached, setting default title')
            setTabName('Unknown')
            setIsLoading(false)
          }
        }
      }, 500)
    }
  }

  return (
    <TooltipProvider>
      <div className="flex h-screen">
        <Sidebar open={open} onOpenChange={setOpen} />
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(!open)}
              >
                <Lucide.Menu className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                {tabIcon && (
                  <img
                    src={tabIcon}
                    alt=""
                    className="w-4 h-4"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                )}
                <span className="text-sm font-medium truncate max-w-[200px]">
                  {tabName || 'Loading...'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ProxyStatus />
            </div>
          </div>
          <div className="flex-1 relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                  <span>Loading...</span>
                </div>
              </div>
            )}
            {showIframe && (
              <iframe
                ref={ref}
                className="w-full h-full border-0"
                onLoad={handleLoad}
                onError={(e) => {
                  console.error('🔧 Interface: iframe error:', e)
                  setIsLoading(false)
                }}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              />
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
