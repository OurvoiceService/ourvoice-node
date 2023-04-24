"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OurVoice = void 0;
const Campaigns_1 = require("./resources/Campaigns");
const Voices_1 = require("./resources/Voices");
const contacts_1 = require("./resources/contacts");
const groups_1 = require("./resources/groups");
const sms_1 = require("./resources/sms");
class OurVoice {
    constructor(config) {
        this.group = new groups_1.Groups(config);
        this.sms = new sms_1.SMS(config);
        this.campaign = new Campaigns_1.Campaigns(config);
        this.contact = new contacts_1.Contacts(config);
        this.voice = new Voices_1.Voices(config);
    }
}
exports.OurVoice = OurVoice;
