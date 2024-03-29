import { Numbers } from "../src/resources/numbers";
import sinon, { SinonStub } from "sinon";
import { expect, assert } from "chai";

import { faker } from "@faker-js/faker";
describe("Numbers", () => {
  let number: Numbers;

  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    number = new Numbers({
      apiKey: "Api Token",
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should get all Numbers", async () => {
    const getNumberStub = sandbox.stub(number, "getList").resolves();

    await number.getList();

    expect(getNumberStub.calledOnce).to.be.true;
  });

  it("should get number by id", async () => {
    const fakeNumberId = faker.datatype.uuid();

    const readStub = sandbox.stub(number, "read").resolves();

    await number.read(fakeNumberId);

    expect(readStub.calledOnceWithExactly(fakeNumberId)).to.be.true;
  });
});
