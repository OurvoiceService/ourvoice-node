
type messageStatus = "delivered" | "undelivered" | "queued";

export declare type Message = {
    id: string,
    account_id: string,
    body: string,
    from: string,
    to: string,
    direction: string,
    status: messageStatus,
    cost: number,
    currency: string,
    created_at: Date,
    updated_at: Date
}

export declare type NewMessage = {
    body: string
    sender_id: string
    to: string[]
}


export declare type MessageList ={

    data: Message[]
    links:object
    meta: object
}