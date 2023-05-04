import { Base } from "../base";

import { NewWebhook, WebHook, WebHookList } from './type';

const resource = "webhooks"
export class WebHooks extends Base {

    getWebHookById(id: string): Promise<WebHook> {
        return this.invoke(`/${resource}/${id}`)
    }

    getWebHooks(): Promise<WebHookList> {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }

    createWebHook(newWebhook: NewWebhook): Promise<WebHook>{
 
        return this.invoke(`/${resource}`, {
            method: "POST", 
            body: JSON.stringify(newWebhook)
        })
    }

    updateWebHook(id: string, updateWebhook: Partial<WebHook>): Promise<WebHook>{
 
        return this.invoke(`/${resource}/${id}`, {
            method: "PUT", 
            body: JSON.stringify(updateWebhook)
        })
    }

    deleteWebHook(id: string): Promise<any>{
 
        return this.invoke(`/${resource}/${id}`, {
            method: "DELETE"
        })
    }
}