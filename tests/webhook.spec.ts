import { Webhooks } from "../src/resources/webhooks";
import { NewWebhook, UpdateWebhook, Webhook } from "../src/resources/webhooks/type"
import sinon, { SinonStub } from 'sinon';
import { expect, assert } from 'chai';

import { faker } from "@faker-js/faker";
describe('Webhooks', () => {

    let webhook: Webhooks;

    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox()
        webhook = new Webhooks({
            apiKey: "Api Token"
        })
    });

    afterEach(() => {
        sandbox.restore();
    });


    it("should get all Webhooks", async () => {


        const getWebhookStub = sandbox.stub(webhook, "getWebhooks").resolves();

        await webhook.getWebhooks()

        expect(getWebhookStub.calledOnce).to.be.true;
    })

    it("should create webhook", async () => {

        let fakeWebhook: NewWebhook = {
            url: faker.datatype.string(),
            secret_hash: faker.datatype.string(),
            event_types: ["sms.sent"]

        }
      
        const saveStub =  sandbox.stub(webhook, 'createWebhook').resolves();

        await webhook.createWebhook(fakeWebhook);

        expect(saveStub.calledOnce).to.be.true;
    })

    it("should get webhook by id", async () => {

        const fakeWebhookId = faker.datatype.uuid()
       
        const getWebhookByIdStub = sandbox.stub(webhook, 'getWebhookById').resolves();

        await webhook.getWebhookById(fakeWebhookId)

        expect(getWebhookByIdStub.calledOnceWithExactly(fakeWebhookId)).to.be.true;
    })
    it("should update webhook", async ()=> {
        
        const fakeWebhookId = faker.datatype.uuid()
        const webhookData: UpdateWebhook = {
            url: faker.datatype.string(),
            secret_hash: faker.datatype.string(),
            event_types: ["sms.sent"]
        }
        const updateWebhookStub = sandbox.stub(webhook, 'updateWebhook').resolves();

        await webhook.updateWebhook(fakeWebhookId, webhookData)

        expect(updateWebhookStub.calledOnce).to.be.true;

    })

    it("should  delete webhook", async ()=> {
        
        const fakeWebhookId = faker.datatype.uuid()
      
        const deleteWebhookStub = sandbox.stub(webhook, 'deleteWebhook').resolves();

        await webhook.deleteWebhook(fakeWebhookId)

        expect(deleteWebhookStub.calledOnce).to.be.true;
    })

});

