'use client'
import ProxyEditor from '@/components/proxy-editor'

export default function ProxySettingsPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Настройки прокси</h1>
          <p className="text-muted-foreground">
            Выберите прокси сервер для использования в приложении
          </p>
        </div>
        
        <ProxyEditor />
        
        <div className="mt-6 text-sm text-muted-foreground">
          <p>
            <strong>Примечание:</strong> Изменения вступят в силу при следующем запросе.
            Текущая сессия продолжит использовать предыдущие настройки.
          </p>
        </div>
      </div>
    </div>
  )
} 