export declare type Voice = {

    id: string
    from: string
    to: string
    audio_url: string
    status: string
    direction: string
    start_time: string
    end_time: string
    cost: string
    campaign_id: string
    contact_id: string
}

export declare type NewVoice = {
    to: Array<string>
    audio_url: string

}

export declare type VoiceList = {

    data: Voice[]
    links: object
    meta: object

}

export declare type VoiceIds = string[]

