import { Groups } from "./resources/groups";
import { SMS } from "./resources/sms";
export declare class Library {
    groups: Groups;
    sms: SMS;
    constructor(config: {
        apiKey: string;
    });
}
