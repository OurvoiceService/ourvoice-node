import { Base } from "../base";
import { NewMessage, Message, MessageList, } from "./type";

const resource = "messages"
export class Messages extends Base {

    getMessageById(id: string): Promise<Message> {
        return this.invoke(`/${resource}/${id}`)
    }

    getMessages(): Promise<MessageList> {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }

    sendMessage(newMessage: NewMessage): Promise<Message> {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newMessage)
        })
    }

    deleteMessage(id: string): Promise<Message> {
        return this.invoke(`/${resource}/${id}`,{
            method: "DELETE",
        })
    }
}