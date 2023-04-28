import { Base } from "../base";
import { Group, NewGroup } from "./type";
export declare class Groups extends Base {
    getGroupById(id: string): Promise<Group>;
    getGroups(): Promise<any>;
    createGroup(newGroup: NewGroup): Promise<any>;
    deleteGroup(id: string): Promise<any>;
    updateGroup(id: string, group: Partial<Group>): Promise<Group>;
}
