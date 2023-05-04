"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OurVoice = void 0;
const campaigns_1 = require("./resources/campaigns");
const voices_1 = require("./resources/voices");
const contacts_1 = require("./resources/contacts");
const groups_1 = require("./resources/groups");
const messages_1 = require("./resources/messages");
const flows_1 = require("./resources/flows");
const numbers_1 = require("./resources/numbers");
const steps_1 = require("./resources/steps");
const account_1 = require("./resources/account");
const webhooks_1 = require("./resources/webhooks");
const subscriptions_1 = require("./resources/subscriptions");
const medias_1 = require("./resources/medias");
class OurVoice {
    constructor(config) {
        this.account = new account_1.Accounts(config);
        this.campaign = new campaigns_1.Campaigns(config);
        this.contact = new contacts_1.Contacts(config);
        this.flow = new flows_1.Flows(config);
        this.group = new groups_1.Groups(config);
        this.message = new messages_1.Messages(config);
        this.number = new numbers_1.Numbers(config);
        this.step = new steps_1.Steps(config);
        this.voice = new voices_1.Voices(config);
        this.subscription = new subscriptions_1.Subscriptions(config);
        this.Webhook = new webhooks_1.Webhooks(config);
        this.media = new medias_1.Medias(config);
    }
}
exports.OurVoice = OurVoice;
