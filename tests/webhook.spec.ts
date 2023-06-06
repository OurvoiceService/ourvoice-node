import { Webhooks } from "../src/resources/webhooks";
import {
  NewWebhook,
  UpdateWebhook,
  Webhook,
} from "../src/resources/webhooks/type";
import sinon, { SinonStub } from "sinon";
import { expect, assert } from "chai";

import { faker } from "@faker-js/faker";
describe("Webhooks", () => {
  let webhook: Webhooks;

  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    webhook = new Webhooks({
      apiKey: "Api Token",
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should get all Webhooks", async () => {
    const getWebhookStub = sandbox.stub(webhook, "getList").resolves();

    await webhook.getList();

    expect(getWebhookStub.calledOnce).to.be.true;
  });

  it("should create webhook", async () => {
    let fakeWebhook: NewWebhook = {
      url: faker.datatype.string(),
      secret_hash: faker.datatype.string(),
      event_types: ["sms.sent"],
    };

    const saveStub = sandbox.stub(webhook, "create").resolves();

    await webhook.create(fakeWebhook);

    expect(saveStub.calledOnce).to.be.true;
  });

  it("should get webhook by id", async () => {
    const fakeWebhookId = faker.datatype.uuid();

    const readStub = sandbox.stub(webhook, "read").resolves();

    await webhook.read(fakeWebhookId);

    expect(readStub.calledOnceWithExactly(fakeWebhookId)).to.be.true;
  });
  it("should update webhook", async () => {
    const fakeWebhookId = faker.datatype.uuid();
    const webhookData: UpdateWebhook = {
      url: faker.datatype.string(),
      secret_hash: faker.datatype.string(),
      event_types: ["sms.sent"],
    };
    const updateStub = sandbox.stub(webhook, "update").resolves();

    await webhook.update(fakeWebhookId, webhookData);

    expect(updateStub.calledOnce).to.be.true;
  });

  it("should  delete webhook", async () => {
    const fakeWebhookId = faker.datatype.uuid();

    const deleteStub = sandbox.stub(webhook, "delete").resolves();

    await webhook.delete(fakeWebhookId);

    expect(deleteStub.calledOnce).to.be.true;
  });
});
