import { Base } from "../base";
import { NewSms, Sms } from "./type";
export declare class SMS extends Base {
    getSmsById(id: string): Promise<Sms>;
    getSms(): Promise<any>;
    sendSms(newSms: NewSms): Promise<Sms>;
}
