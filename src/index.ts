import { Campaigns } from "./resources/Campaigns";
import { Groups } from "./resources/groups";
import { SMS } from "./resources/sms";


export class Library{

    groups: Groups
    sms: SMS;
    campaign: Campaigns

    constructor(config: {apiKey: string}){
        this.groups = new Groups(config)
        this.sms = new SMS(config)
        this.campaign= new Campaigns(config)
    }
}