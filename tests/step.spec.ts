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
    const getStepsStub = sandbox.stub(step, "getSteps").resolves();

    await step.getSteps();

    expect(getStepsStub.calledOnce).to.be.true;
  });

  it("should get step by id", async () => {
    const fakeStepId = faker.datatype.uuid();

    const getStepByIdStub = sandbox.stub(step, "getStepById").resolves();

    await step.getStepById(fakeStepId);

    expect(getStepByIdStub.calledOnceWithExactly(fakeStepId)).to.be.true;
  });
});
