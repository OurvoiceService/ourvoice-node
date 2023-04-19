"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const isomorphic_unfetch_1 = __importDefault(require("isomorphic-unfetch"));
class Base {
    constructor(config) {
        this.apikey = config.apiKey;
        this.baseUrl = "https://staging.getourvoice.com/api/v1";
    }
    async invoke(endpoint, options) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apikey}`,
        };
        const config = Object.assign(Object.assign({}, options), { headers });
        const response = await (0, isomorphic_unfetch_1.default)(url, config);
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error(JSON.parse(response.statusText));
        }
    }
}
exports.Base = Base;
