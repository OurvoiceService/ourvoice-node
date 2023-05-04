import { Campaigns } from "./resources/campaigns";
import { Voices } from "./resources/voices";
import { Contacts } from "./resources/contacts";
import { Groups } from "./resources/groups";
import { Messages } from "./resources/messages";
import { Flows } from "./resources/flows";
import { Numbers } from "./resources/numbers";
import { Steps } from "./resources/steps";
import { Accounts } from "./resources/account";
import { Webhooks } from "./resources/webhooks";
import { Subscriptions } from "./resources/subscriptions";
import { Medias } from "./resources/medias";


export class OurVoice {

    account: Accounts
    campaign: Campaigns
    contact: Contacts
    flow: Flows
    group: Groups
    media: Medias
    message: Messages;
    number: Numbers
    step: Steps
    voice: Voices
    subscription: Subscriptions
    Webhook: Webhooks

    constructor(config: { apiKey: string }) {
        this.account = new Accounts(config)
        this.campaign = new Campaigns(config)
        this.contact = new Contacts(config)
        this.flow = new Flows(config)
        this.group = new Groups(config)
        this.message = new Messages(config)
        this.number = new Numbers(config)
        this.step = new Steps(config)
        this.voice = new Voices(config)
        this.subscription = new Subscriptions(config)
        this.Webhook = new Webhooks(config)
        this.media = new Medias(config)
    }
}