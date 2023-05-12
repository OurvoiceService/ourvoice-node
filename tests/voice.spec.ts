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
    const sendVoiceCallStub = sandbox.stub(voice, "sendVoiceCall").resolves();

    await voice.sendVoiceCall({
      to: [faker.datatype.string()],
      audio_url: faker.internet.url(),
    });

    expect(sendVoiceCallStub.calledOnce).to.be.true;
  });

  it("should get all voice", async () => {
    const getVoiceStub = sandbox.stub(voice, "getVoices").resolves();

    await voice.getVoices();

    expect(getVoiceStub.calledOnce).to.be.true;
  });

  it("should get all voice", async () => {
    const getVoiceStub = sandbox.stub(voice, "getVoices").resolves();

    await voice.getVoices();

    expect(getVoiceStub.calledOnce).to.be.true;
  });
});
