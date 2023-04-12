"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bangado_node_sdk_1 = require("bangado-node-sdk");
const client = new bangado_node_sdk_1.Library({
    apiKey: "66|gxpH8g64pWOegen4ZfuSgTlOcrXPbv22IIjEjVNlRgr09HZhcTw2ccjjfBauk5Dv64LW99wK1vjOYM3NjJ9RDPRPc27545GCXeSAVY4ODe8V1NSxGydDFV4dlL4UGl7unWyClHhiTiZVHP3Q4VANRTzGdBam0Njxta60n5XYb6dcfYTucGnEIMkMyCnLPqxwJKuG9k8MpLuqJZWiFV3gKGIbVGLTKq7aJdYBMVxbbfKCpTuS"
});
let group = {
    name: "testeur1",
    description: "ok"
};
let postId = "";
client.groups.
    createGroup(group)
    .then((g) => {
    console.log(`The  group:  ${JSON.stringify(g["data"].name)} is created`);
});
client.groups.getGroups().then((groups) => {
    console.info('groups list');
    console.log(groups);
});
client.sms.getSms().then((sms) => {
    console.log(sms);
});
