"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voices = void 0;
const base_1 = require("../base");
const resource = "voices";
class Voices extends base_1.Base {
    getVoiceById(id) {
        return this.invoke(`/${resource}/${id}`);
    }
    getVoices() {
        return this.invoke(`/voices`, {
            method: 'GET'
        });
    }
    sendVoice(newVoice) {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newVoice)
        });
    }
    deleteVoice(id) {
        return this.invoke(`/${resource}/${id}`, {
            method: "DELETE",
        });
    }
}
exports.Voices = Voices;
