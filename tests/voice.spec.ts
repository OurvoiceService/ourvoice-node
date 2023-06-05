import { Voices } from "../src/resources/voices";
import {} from "../src/resources/voices/type";
import sinon, { SinonStub } from "sinon";
import { expect, assert } from "chai";

import { faker } from "@faker-js/faker";
describe("Voice", () => {
  let voice: Voices;

  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    voice = new Voices({
      apiKey: "Api token",
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should send voice Call", async () => {
    const createStub = sandbox.stub(voice, "create").resolves();

    await voice.create({
      to: [faker.datatype.string()],
      audio_url: faker.internet.url(),
    });

    expect(createStub.calledOnce).to.be.true;
  });

  it("should get all voice", async () => {
    const getVoiceStub = sandbox.stub(voice, "getList").resolves();

    await voice.getList();

    expect(getVoiceStub.calledOnce).to.be.true;
  });

  it("should get all voice", async () => {
    const getVoiceStub = sandbox.stub(voice, "getList").resolves();

    await voice.getList();

    expect(getVoiceStub.calledOnce).to.be.true;
  });
});
