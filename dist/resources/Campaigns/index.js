"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campaigns = void 0;
const base_1 = require("../base");
const resource = "campaigns";
class Campaigns extends base_1.Base {
    getCampaignById(id) {
        return this.invoke(`/${resource}/${id}`);
    }
    getCampaigns() {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        });
    }
    createCampaign(newCampagne) {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newCampagne)
        });
    }
    updateCampaign(id, newCampagne) {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newCampagne)
        });
    }
    deleteCampaign(id) {
        return this.invoke(`/${resource}/${id}`, {
            method: "DELETE",
        });
    }
}
exports.Campaigns = Campaigns;
