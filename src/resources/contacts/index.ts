import { Base } from "../base";
import { Contact,  ContactList,  NewContact, NewContactGroup } from './type';

const resources = "contacts"
export class Contacts extends Base{

    getContactById(id: string): Promise<Contact>{
        return  this.invoke(`/${resources}/${id}`)
    }

    getContacts(): Promise<ContactList>{
        return this.invoke(`/${resources}`, {
            method: 'GET'
        })
    }

    createContact(newContact: NewContact): Promise<Contact>{
 
        return this.invoke(`/${resources}`, {
            method: "POST", 
            body: JSON.stringify(newContact)
        })
    }

    updateContact(id: string, contactData: Partial<Contact>): Promise<Contact>{
 
        return this.invoke(`/${resources}/${id}`, {
            method: "PUT", 
            body: JSON.stringify(contactData)
        })
    }
    
    deleteContact(id: string): Promise<any>{
 
        return this.invoke(`/${resources}/${id}`, {
            method: "DELETE"
        })
    }
}