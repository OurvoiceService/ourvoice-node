import { Base } from "../base";
import { NewSender, Sender, SenderList } from "./type";

const resource = "senders"
export class Senders extends Base {


    getSenders(): Promise<SenderList> {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }

    createSender(newSender: Partial<NewSender>): Promise<Sender> {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newSender)
        })
    }

    updateSender(id: string,newSender:  Partial<NewSender>): Promise<Sender> {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newSender)
        })
    }

    deleteSender(id: string): Promise<Sender> {
        return this.invoke(`/${resource}/${id}`,{
            method: "DELETE",
        })
    }
}