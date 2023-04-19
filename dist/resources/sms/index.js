"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMS = void 0;
const base_1 = require("../base");
const resource = "messages";
class SMS extends base_1.Base {
    getSmsById(id) {
        return this.invoke(`/${resource}/${id}`);
    }
    getSms() {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        });
    }
    sendSms(newSms) {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newSms)
        });
    }
    deleteSms(id) {
        return this.invoke(`/${resource}/${id}`, {
            method: "DELETE",
        });
    }
}
exports.SMS = SMS;
