import { Steps } from "../src/resources/steps";
import sinon, { SinonStub } from "sinon";
import { expect, assert } from "chai";

import { faker } from "@faker-js/faker";
describe("Steps", () => {
  let step: Steps;

  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    step = new Steps({
      apiKey: "Api Token",
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should get all Steps", async () => {
    const getListStub = sandbox.stub(step, "getList").resolves();

    await step.getList();

    expect(getListStub.calledOnce).to.be.true;
  });

  it("should get step by id", async () => {
    const fakeStepId = faker.datatype.uuid();

    const readStub = sandbox.stub(step, "read").resolves();

    await step.read(fakeStepId);

    expect(readStub.calledOnceWithExactly(fakeStepId)).to.be.true;
  });
});
