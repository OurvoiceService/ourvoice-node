import { Base } from "../base";
import {
  Contact,
  ContactList,
  NewContact,
  NewContactGroup,
  UpdateContact,
} from "./type";

const resources = "contacts";
export class Contacts extends Base {
  read(id: string): Promise<Contact> {
    return this.invoke(`/${resources}/${id}`);
  }

  getList(): Promise<ContactList> {
    return this.invoke(`/${resources}`, {
      method: "GET",
    });
  }

  create(newContact: NewContact): Promise<Contact> {
    return this.invoke(`/${resources}`, {
      method: "POST",
      body: JSON.stringify(newContact),
    });
  }

  update(
    id: string,
    contactData: Partial<UpdateContact>
  ): Promise<Contact> {
    return this.invoke(`/${resources}/${id}`, {
      method: "PUT",
      body: JSON.stringify(contactData),
    });
  }

  delete(id: string): Promise<any> {
    return this.invoke(`/${resources}/${id}`, {
      method: "DELETE",
    });
  }
}
