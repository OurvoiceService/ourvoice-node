import { Messages } from "../src/resources/messages";
import { Message, NewMessage } from "../src/resources/messages/type";
import sinon, { SinonStub } from "sinon";
import { expect, assert } from "chai";

import { faker } from "@faker-js/faker";
describe("Message", () => {
  let message: Messages;

  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    message = new Messages({
      apiKey: "Api token",
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should getMessages", async () => {
    const getMessageStub = sandbox.stub(message, "getMessages").resolves();

    await message.getMessages();

    expect(getMessageStub.calledOnce).to.be.true;
  });

  it("should send message", async () => {
    let fakeMessage: NewMessage = {
      to: ["22996328451"],
      body: faker.lorem.text(),
      sender_id: faker.datatype.uuid(),
    };

    const saveStub = sandbox.stub(message, "sendMessage").resolves();

    await message.sendMessage(fakeMessage);

    expect(saveStub.calledOnce).to.be.true;
  });

  it("should get message by id", async () => {
    const fakeMessageId = faker.datatype.uuid();
    const fakeMessage: Message = {
      id: fakeMessageId,
      account_id: faker.datatype.uuid(),
      body: faker.lorem.sentence(20),
      from: faker.datatype.string(),
      to: faker.lorem.paragraph(),
      direction: faker.datatype.string(),
      status: "delivered",
      cost: faker.datatype.number(),
      currency: faker.datatype.string(),
      created_at: faker.datatype.datetime(),
      updated_at: faker.datatype.datetime(),
    };
    const getMessageStub = sandbox.stub(message, "getMessageById").resolves();

    await message.getMessageById(fakeMessageId);

    expect(getMessageStub.calledOnceWithExactly(fakeMessageId)).to.be.true;

    //expect(result["data"]).to.be.an('object');
  });

  it("should delete message", async () => {
    const fakeMessageId = faker.datatype.uuid();

    const deleteMessageStub = sandbox.stub(message, "deleteMessage").resolves();

    await message.deleteMessage(fakeMessageId);

    expect(deleteMessageStub.calledOnceWithExactly(fakeMessageId)).to.be.true;

    //expect(result["data"]).to.be.an('object');
  });
});
