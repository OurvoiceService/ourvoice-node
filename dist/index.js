"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const Campaigns_1 = require("./resources/Campaigns");
const groups_1 = require("./resources/groups");
const sms_1 = require("./resources/sms");
class Library {
    constructor(config) {
        this.groups = new groups_1.Groups(config);
        this.sms = new sms_1.SMS(config);
        this.campaign = new Campaigns_1.Campaigns(config);
    }
}
exports.Library = Library;
