import { Base } from "../base";
import { Group, GroupList, NewGroup } from "./type";

const resource = "groups";
export class Groups extends Base {
  getGroupById(id: string): Promise<Group> {
    return this.invoke(`/${resource}/${id}`);
  }

  getGroups() {
      return this.invoke(`/${resource}`, {
        method: "GET",
      });
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

  addContactToGroup(groupId: string, contactId: string): Promise<any> {
    return this.invoke(`/${resource}/${groupId}/contacts/${contactId}`, {
      method: "PATCH",
    });
  }
}
