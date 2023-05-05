import { Base } from "../base";

import {Subscription, SubscriptionList, NewSubscription } from './type';

const resource = "subscriptions"
export class Subscriptions extends Base {

    getSubscriptionById(id: string): Promise<Subscription> {
        return this.invoke(`/${resource}/${id}`)
    }

    getSubscriptions(): Promise<SubscriptionList> {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }

    newSubscription(newSubscription: NewSubscription): Promise<Subscription>{
 
        return this.invoke(`/${resource}`, {
            method: "POST", 
            body: JSON.stringify(newSubscription)
        })
    }

    deleteSubscription(id: string): Promise<any>{
 
        return this.invoke(`/${resource}/${id}`, {
            method: "DELETE"
        })
    }
}