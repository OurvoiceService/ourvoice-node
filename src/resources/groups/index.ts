import { Base } from "../base";
import { Group, GroupList,ConctactIds, NewGroup } from "./type";

const resource = "groups";
export class Groups extends Base {
  getGroupById(id: string): Promise<Group> {
    return this.invoke(`/${resource}/${id}`);
  }

  async getGroups() {
    let groups;
    try {
      groups = await this.invoke(`/${resource}`, {
        method: "GET",
      });
    } catch (error) {
      console.log({ error });
      throw new Error(error);
    }

    return groups;
  }

  createGroup(newGroup: NewGroup): Promise<any> {
    return this.invoke(`/${resource}`, {
      method: "POST",
      body: JSON.stringify(newGroup),
    });
  }

  deleteGroup(id: string): Promise<any> {
    return this.invoke(`/${resource}/${id}`, {
      method: "DELETE",
    });
  }

  updateGroup(id: string, group: Partial<Group>): Promise<Group> {
    return this.invoke(`/${resource}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(group),
    });
  }

    addContactToGroup( groupId: string, contactId: string):Promise<any>{
      return this.invoke(`/${resource}/${groupId}/contacts/${contactId}`, {
        method: "PUT"
      });
    }

    addContactsToGroup( groupId: string, contactIds: ConctactIds):Promise<any>{
      return this.invoke(`/${resource}/${groupId}/contacts`, {
        method: "PUT",
        body: JSON.stringify(contactIds),
      });
    }
}
