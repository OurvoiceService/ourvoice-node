
import fetch from 'isomorphic-unfetch'
type Config = {
    apiKey: string
    baseUrl?: string
}

export abstract class Base {
    private apikey: string
    private baseUrl: string

    constructor(config: Config) {
        this.apikey = config.apiKey
        this.baseUrl = "https://staging.getourvoice.com/api/v1"
    }

    protected async invoke<T>(endpoint: string, options?: RequestInit): Promise<any> {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apikey}`,
        }

        const config = {
            ...options,
            headers
        }

        let response = await fetch(url, config)

        let responseData = await response.json();
        
        return responseData.data

    }

}