import { Base } from "../base";
import { Contact,  NewContact, NewContactGroup } from "./type";

const resources = "contacts"
export class Contacts extends Base{

    getContactById(id: string): Promise<Contact>{
        return  this.invoke(`/${resources}/${id}`)
    }

    getContacts(): Promise<any>{
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

    updateContact(id: string): Promise<Contact>{
 
        return this.invoke(`/${resources}/${id}`, {
            method: "PUT", 
            body: JSON.stringify(id)
        })
    }
    
    deleteContact(id: string): Promise<Contact>{
 
        return this.invoke(`/${resources}/${id}`, {
            method: "DELETE", 
            body: JSON.stringify(id)
        })
    }
}
