import { Campaigns } from "./resources/Campaigns";
import { Groups } from "./resources/groups";
import { SMS } from "./resources/sms";
export declare class Library {
    groups: Groups;
    sms: SMS;
    campaign: Campaigns;
    constructor(config: {
        apiKey: string;
    });
}
