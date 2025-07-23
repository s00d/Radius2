import { Agent } from 'http'
import { Agent as HttpsAgent } from 'https'
import { HttpsProxyAgent } from 'https-proxy-agent'

export class ProxyManager {
  private httpAgent: Agent | null = null
  private httpsAgent: HttpsAgent | null = null
  private currentProxy: any = null

  setProxy(proxyConfig: any): void {
    this.currentProxy = proxyConfig
    
    if (proxyConfig && proxyConfig.host && proxyConfig.port) {
      const proxyUrl = `http://${proxyConfig.host}:${proxyConfig.port}`
      
      if (proxyConfig.username && proxyConfig.password) {
        const auth = `${proxyConfig.username}:${proxyConfig.password}`
        const proxyUrlWithAuth = `http://${auth}@${proxyConfig.host}:${proxyConfig.port}`
        this.httpAgent = new HttpsProxyAgent(proxyUrlWithAuth) as any
        this.httpsAgent = new HttpsProxyAgent(proxyUrlWithAuth) as any
      } else {
        this.httpAgent = new HttpsProxyAgent(proxyUrl) as any
        this.httpsAgent = new HttpsProxyAgent(proxyUrl) as any
      }
      
      console.log('🔧 ProxyManager: Set proxy:', proxyConfig.host + ':' + proxyConfig.port)
    } else {
      this.httpAgent = null
      this.httpsAgent = null
      console.log('🔧 ProxyManager: Proxy disabled')
    }
  }

  getHttpAgent(): Agent | null {
    return this.httpAgent
  }

  getHttpsAgent(): HttpsAgent | null {
    return this.httpsAgent
  }

  getCurrentProxy(): any {
    return this.currentProxy
  }
} 