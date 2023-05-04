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
export declare class OurVoice {
    account: Accounts;
    campaign: Campaigns;
    contact: Contacts;
    flow: Flows;
    group: Groups;
    media: Medias;
    message: Messages;
    number: Numbers;
    step: Steps;
    voice: Voices;
    subscription: Subscriptions;
    webhook: Webhooks;
    constructor(config: {
        apiKey: string;
    });
}
