import { Sms } from "../sms/type";
export declare type Campaign = {
    id: string;
    body: string;
    group: object;
    type: string;
    voices: any;
    messages: Sms[];
    name: string;
    repeat: string;
    start_date: Date;
    end_date: Date;
    status: string;
};
export declare type NewCampaign = {
    body?: string;
    sender_id?: string;
    group?: object;
    type?: string;
    voices?: any;
    messages?: any;
    name?: string;
    repeat?: string;
    start_date?: Date;
    end_date?: Date;
    status?: string;
};
export declare type CampaignList = {
    data: Campaign[];
    links: object;
    meta: object;
};
