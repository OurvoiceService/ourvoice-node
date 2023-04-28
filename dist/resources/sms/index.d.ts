import { Base } from "../base";
import { NewSms, Sms, SmsList } from "./type";
export declare class SMS extends Base {
    getSmsById(id: string): Promise<Sms>;
    getSms(): Promise<SmsList>;
    sendSms(newSms: NewSms): Promise<Sms>;
    deleteSms(id: string): Promise<Sms>;
}
