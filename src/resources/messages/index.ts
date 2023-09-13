import { Base } from "../base";
import { NewMessage, Message, MessageList } from "./type";

const resource = "messages";
export class Messages extends Base {
  read(id: string): Promise<Message> {
    return this.invoke(`/${resource}/${id}`);
  }

  getList(): Promise<MessageList> {
    return this.invoke(`/${resource}`, {
      method: "GET",
    });
  }

  create(newMessage: NewMessage): Promise<Message> {
    return this.invoke(`/${resource}`, {
      method: "POST",
      body: JSON.stringify(newMessage),
    });
  }

  delete(id: string): Promise<Message> {
    return this.invoke(`/${resource}/${id}`, {
      method: "DELETE",
    });
  }

  getStats(): Promise<object> {
    return this.invoke(`/stats/sms/`, {
      method: "GET",
    });
  }
}
