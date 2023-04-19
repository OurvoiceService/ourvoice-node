import { Base } from "../base";
import { Group,  NewGroup, } from "./type";

const resource = "groups"
export class Groups extends Base{

     getGroupById(id: string): Promise<Group>{
        return  this.invoke(`/${resource}/${id}`)
    }

    getGroups(): Promise<any>{
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }

    createGroup(newGroup: NewGroup): Promise<Group>{
 
        return this.invoke(`/${resource}`, {
            method: "POST", 
            body: JSON.stringify(newGroup)
        })
    }

 
    deleteGroup(id: string): Promise<any>{
        return  this.invoke(`/${resource}/${id}`, {
            method: "DELETE"
        })
    }

    updateGroup(id: string, group: Group): Promise<Group>{
        return  this.invoke(`/${resource}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(group)

        })
    }
}