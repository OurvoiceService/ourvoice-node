
export declare type Sender = {

    id: string
    name: string
    description: string
    status: string
    start_date: Date,
    end_date: Date,
}

export declare type NewSender = {
    name: string
    description?: string
}

export declare type SenderList ={

    data: Sender[]
    links:object
    meta: object
}