export declare type Sms = {

    id: string
    body: string
    sender_id: string
}

export declare type NewSms = {
    body: string
    sender_id: string
    to: string[]
}
