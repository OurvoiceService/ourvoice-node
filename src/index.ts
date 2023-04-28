import { Campaigns } from "./resources/Campaigns";
import { Voices } from "./resources/Voices";
import { Contacts } from "./resources/contacts";
import { Groups } from "./resources/groups";
import { SMS } from "./resources/sms";


export class OurVoice{

    group: Groups
    sms: SMS;
    campaign: Campaigns
    contact: Contacts
    voice: Voices
    
    constructor(config: {apiKey: string}){
        this.group = new Groups(config)
        this.sms = new SMS(config)
        this.campaign = new Campaigns(config)
        this.contact= new Contacts(config)
        this.voice= new Voices(config)
    }
}