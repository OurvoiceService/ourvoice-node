"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voices = void 0;
const base_1 = require("../base");
const resources = "calls";
const resource = "call";
const voice = "voices";
class Voices extends base_1.Base {
    getVoices() {
        return this.invoke(`/${voice}`, {
            method: "GET"
        });
    }
    sendVoiceCall(newVoice) {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newVoice)
        });
    }
    getCalls() {
        return this.invoke(`/${resources}`, {
            method: "GET",
        });
    }
    deleteCall(id) {
        return this.invoke(`/${resources}/${id}`, {
            method: "DELETE",
            body: JSON.stringify(id)
        });
    }
}
exports.Voices = Voices;
