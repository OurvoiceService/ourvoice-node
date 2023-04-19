
import fetch from 'isomorphic-unfetch'
type Config = {
    apiKey:string
    baseUrl? : string
}

export abstract class Base {
    private apikey: string
    private baseUrl: string

    constructor(config: Config) {
        this.apikey = config.apiKey
        this.baseUrl = "https://staging.getourvoice.com/api/v1" 
    }

    protected async invoke<T>( endpoint: string, options?: RequestInit): Promise<T>{
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apikey}`,
        }

        const config ={
            ...options,
            headers 
        }


        const response = await fetch(url, config)
        if (response.ok) {

            return response.json()
        } else {

            throw new Error(JSON.parse(response.statusText))

        }
    }

}