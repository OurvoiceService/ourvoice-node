import { Campaigns } from "./resources/campaigns";
import { Voices } from "./resources/voices";
import { Contacts } from "./resources/contacts";
import { Groups } from "./resources/groups";
import { Messages } from "./resources/messages";
import { Flows } from "./resources/flows";
import { Numbers } from "./resources/numbers";
import { Steps } from "./resources/steps";
import { Accounts } from "./resources/account";
export declare class OurVoice {
    account: Accounts;
    campaign: Campaigns;
    contact: Contacts;
    flow: Flows;
    group: Groups;
    message: Messages;
    number: Numbers;
    step: Steps;
    voice: Voices;
    constructor(config: {
        apiKey: string;
    });
}
