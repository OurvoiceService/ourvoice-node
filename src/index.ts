import { Campaigns } from "./resources/campaigns";
import { Senders } from "./resources/senders";
import { Voices } from "./resources/voices";
import { Contacts } from "./resources/contacts";
import { Groups } from "./resources/groups";
import { Messages } from "./resources/messages";
import { Flows } from "./resources/flows";


export class OurVoice {

    group: Groups
    message: Messages;
    campaign: Campaigns
    contact: Contacts
    voice: Voices
    sender: Senders
    flow: Flows

    constructor(config: { apiKey: string }) {
        this.group = new Groups(config)
        this.message = new Messages(config)
        this.campaign = new Campaigns(config)
        this.contact = new Contacts(config)
        this.voice = new Voices(config)
        this.sender = new Senders(config)
        this.flow = new Flows(config)
    }
}