import { Campaigns } from "./resources/Campaigns";
import { Senders } from "./resources/Senders";
import { Voices } from "./resources/Voices";
import { Contacts } from "./resources/contacts";
import { Groups } from "./resources/groups";
import { SMS } from "./resources/sms";
export declare class OurVoice {
    group: Groups;
    sms: SMS;
    campaign: Campaigns;
    contact: Contacts;
    voice: Voices;
    sender: Senders;
    constructor(config: {
        apiKey: string;
    });
}
