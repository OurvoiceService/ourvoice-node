
export declare type Media = {
    id: string,
    name: string,
    media_url: string,
    type: string,
    created_at: Date,
    updated_at: Date
}

export declare type NewMedia = {
    file: string,
}

export declare type MediaList = {

    data: Media[]
    links: object
    meta: object
}

export declare type UpdateMedia = {
    name?: string
    media_url?: string
    type?: string
}
