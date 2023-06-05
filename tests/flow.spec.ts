import { Flows } from "../src/resources/flows";
import { Flow, UpdateFlowStatus } from "../src/resources/flows/type";
import sinon, { SinonStub } from "sinon";
import { expect, assert } from "chai";

import { faker } from "@faker-js/faker";
describe("Flow", () => {
  let flow: Flows;

  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    flow = new Flows({
      apiKey: "Api token",
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should getList", async () => {
    const getFlowStub = sandbox.stub(flow, "getList").resolves();

    await flow.getList();

    expect(getFlowStub.calledOnce).to.be.true;
  });

  it("should get flow by id", async () => {
    const fakeFlowId = faker.datatype.uuid();

    const getFlowStub = sandbox.stub(flow, "read").resolves();

    await flow.read(fakeFlowId);

    expect(getFlowStub.calledOnceWithExactly(fakeFlowId)).to.be.true;

    //expect(result["data"]).to.be.an('object');
  });

  it("should start flow", async () => {
    const fakeFlowId = faker.datatype.uuid();

    const startFlowStub = sandbox.stub(flow, "startFlow").resolves();

    await flow.startFlow(fakeFlowId);

    expect(startFlowStub.calledOnceWithExactly(fakeFlowId)).to.be.true;
  });

  it("should update flow status", async () => {
    const fakeFlowId = faker.datatype.uuid();

    const flowStatus: UpdateFlowStatus = {
      status: "paused",
    };

    const updateStub = sandbox
      .stub(flow, "update")
      .resolves();

    await flow.update(fakeFlowId, flowStatus);

    expect(updateStub.calledOnce).to.be.true;
  });
});
