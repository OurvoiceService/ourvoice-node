import { Base } from "../base";

import { NewWebhook, Webhook, WebhookList, UpdateWebhook } from './type';

const resource = "Webhooks"
export class Webhooks extends Base {

    getWebhookById(id: string): Promise<Webhook> {
        return this.invoke(`/${resource}/${id}`)
    }

    getWebhooks(): Promise<WebhookList> {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }

    createWebhook(newWebhook: NewWebhook): Promise<Webhook>{
 
        return this.invoke(`/${resource}`, {
            method: "POST", 
            body: JSON.stringify(newWebhook)
        })
    }

    updateWebhook(id: string, updateWebhook: Partial<UpdateWebhook>): Promise<Webhook>{
 
        return this.invoke(`/${resource}/${id}`, {
            method: "PUT", 
            body: JSON.stringify(updateWebhook)
        })
    }

    deleteWebhook(id: string): Promise<any>{
 
        return this.invoke(`/${resource}/${id}`, {
            method: "DELETE"
        })
    }
}