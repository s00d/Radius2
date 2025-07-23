'use client'
import { useState, useEffect } from 'react'
// Простой компонент Badge
const Badge = ({ variant = 'default', className = '', children }: { variant?: 'default' | 'secondary', className?: string, children: React.ReactNode }) => {
  const baseClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium'
  const variantClasses = {
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground'
  }
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}
import store from 'store2'
import { Settings, Wifi, WifiOff } from 'lucide-react'

interface ProxyStatusProps {
  className?: string
}

export default function ProxyStatus({ className = '' }: ProxyStatusProps) {
  const [proxyConfig, setProxyConfig] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [proxyName, setProxyName] = useState<string>('')

  useEffect(() => {
    const loadProxyStatus = () => {
      try {
        const config = store.get('proxyConfig')
        setProxyConfig(config)
      } catch (error) {
        console.error('Failed to load proxy status:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProxyStatus()
  }, [])

  useEffect(() => {
    const getProxyName = async () => {
      if (!proxyConfig) return
      
      try {
        const response = await fetch('/api/proxies')
        if (response.ok) {
          const data = await response.json()
          const matchingProxy = data.proxies.find((p: any) => 
            p.host === proxyConfig.host && 
            p.port === proxyConfig.port &&
            p.username === proxyConfig.username
          )
          if (matchingProxy) {
            setProxyName(matchingProxy.name)
          }
        }
      } catch (error) {
        console.error('Failed to get proxy name:', error)
      }
    }

    getProxyName()
  }, [proxyConfig])

  if (isLoading) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Settings className="h-4 w-4 animate-spin" />
        <span className="text-xs">Loading...</span>
      </div>
    )
  }

  if (!proxyConfig) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <WifiOff className="h-4 w-4 text-gray-400" />
        <Badge variant="secondary" className="text-xs">
          Direct
        </Badge>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Wifi className="h-4 w-4 text-green-500" />
      <Badge variant="default" className="text-xs">
        {proxyName || `${proxyConfig.host}:${proxyConfig.port}`}
      </Badge>
    </div>
  )
} 