export declare type Sms = {

    id: string,
    account_id: string,
    body: string,
    from: string,
    to: string,
    direction: string,
    status: string,
    cost: number,
    currency: string,
    created_at: Date,
    updated_at: Date
}

export declare type NewSms = {
    body: string
    sender_id: string
    to: string[]
}
