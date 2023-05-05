import { Message } from "../messages/type"
import { Voice } from "../voices/type"

export declare type Campaign = {

    id: string,
    body: string,
    group: object,
    type: string,
    voices?: Voice[],
    messages?: Message[]
    name: string,
    repeat: string,
    start_date: Date,
    end_date: Date,
    status: string,
}

export declare type CampaignRepeat = "never"|"daily"|"weekly"|"monthly"|"yearly"
export declare type CampaignType = "voice"|"sms"
export declare type NewCampaign = {
    body?: string,
    sender_id?: string,
    audio_url?: string,
    group_ids: string[],
    type?: CampaignType,
    name: string,
    repeat?: CampaignRepeat,
    start_date?: Date,
    end_date?: Date,
    status?: string,
}

export declare type CampaignList ={

    data: Campaign[],
    links:object,
    meta: object
}