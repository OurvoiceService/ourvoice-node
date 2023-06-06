import { Subscriptions } from "../src/resources/subscriptions";
import { NewSubscription } from "../src/resources/subscriptions/type";
import sinon, { SinonStub } from "sinon";
import { expect, assert } from "chai";

import { faker } from "@faker-js/faker";
describe("Subscriptions", () => {
  let subscription: Subscriptions;

  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    subscription = new Subscriptions({
      apiKey: "Api Token",
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should get all Subscriptions", async () => {
    const getSubscriptionStub = sandbox
      .stub(subscription, "getList")
      .resolves();

    await subscription.getList();

    expect(getSubscriptionStub.calledOnce).to.be.true;
  });

  it("should create subscriptions", async () => {
    let fakeSubscription: NewSubscription = {
      plan_id: faker.datatype.uuid(),
    };

    const saveStub = sandbox.stub(subscription, "create").resolves();

    await subscription.create(fakeSubscription);

    expect(saveStub.calledOnce).to.be.true;
  });

  it("should get subscription by id", async () => {
    const fakeSubscriptionId = faker.datatype.uuid();

    const readStub = sandbox.stub(subscription, "read").resolves();

    await subscription.read(fakeSubscriptionId);

    expect(readStub.calledOnceWithExactly(fakeSubscriptionId)).to.be.true;
  });

  it("should  delete subscription", async () => {
    const fakeSubscriptionId = faker.datatype.uuid();

    const deleteStub = sandbox.stub(subscription, "delete").resolves();

    await subscription.delete(fakeSubscriptionId);

    expect(deleteStub.calledOnce).to.be.true;
  });
});
