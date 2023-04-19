import { Base } from "../base";
import { NewSms, Sms, } from "./type";

const resource = "messages"
export class SMS extends Base {

    getSmsById(id: string): Promise<Sms> {
        return this.invoke(`/${resource}/${id}`)
    }

    getSms(): Promise<any> {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }

    sendSms(newSms: NewSms): Promise<Sms> {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newSms)
        })
    }


    deleteSms(id: string): Promise<Sms> {
        return this.invoke(`/${resource}/${id}`,{
            method: "DELETE",
        })
    }
}