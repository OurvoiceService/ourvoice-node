"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Groups = void 0;
const base_1 = require("../base");
const resource = "groups";
class Groups extends base_1.Base {
    getGroupById(id) {
        return this.invoke(`/${resource}/${id}`);
    }
    async getGroups() {
        let groups;
        try {
            groups = await this.invoke(`/${resource}`, {
                method: 'GET'
            });
        }
        catch (error) {
            console.log({ error });
            throw new Error(error);
        }
        return groups;
    }
    createGroup(newGroup) {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newGroup)
        });
    }
    deleteGroup(id) {
        return this.invoke(`/${resource}/${id}`, {
            method: "DELETE"
        });
    }
    updateGroup(id, group) {
        return this.invoke(`/${resource}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(group)
        });
    }
}
exports.Groups = Groups;
