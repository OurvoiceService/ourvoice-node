
export declare type Subscription = {
    id: string,
    plan: object,
    sms_used?:number,
    voices_used?:number,
    status:string,
    created_at: Date,
    updated_at: Date
}

export declare type NewSubscription = {
    plan_id: string
}

export declare type SubscriptionList = {

    data: Subscription[]
    links: object
    meta: object
}

export declare type UpdateSubscription = {
    name?: string
    media_url?: string
    type?: string
}
