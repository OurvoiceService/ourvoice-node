import { Medias } from "../src/resources/medias";
import { Media, NewMedia, UpdateMedia } from "../src/resources/medias/type";
import sinon, { SinonStub } from "sinon";
import { expect, assert } from "chai";

import { faker } from "@faker-js/faker";
describe("Medias", () => {
  let media: Medias;

  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    media = new Medias({
      apiKey: "Api Token",
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should get all Medias", async () => {
    const getMediaStub = sandbox.stub(media, "getList").resolves();

    await media.getList();

    expect(getMediaStub.calledOnce).to.be.true;
  });

  it("should save media", async () => {
    let fakeMedia: NewMedia = {
      file: faker.datatype.string(),
    };
    const saveStub = sandbox.stub(media, "create").resolves();

    await media.create(fakeMedia);

    expect(saveStub.calledOnce).to.be.true;
  });

  it("should get media by id", async () => {
    const fakeMediaId = faker.datatype.uuid();

    const readStub = sandbox.stub(media, "read").resolves();

    await media.read(fakeMediaId);

    expect(readStub.calledOnceWithExactly(fakeMediaId)).to.be.true;
  });

  it("should update media", async () => {
    const fakeMediaId = faker.datatype.uuid();
    const mediaData: UpdateMedia = {
      name: faker.datatype.string(),
      media_url: faker.datatype.string(),
      type: faker.datatype.string(),
    };

    const updateStub = sandbox.stub(media, "update").resolves();

    await media.update(fakeMediaId, mediaData);

    expect(updateStub.calledOnce).to.be.true;
  });

  it("should  delete media", async () => {
    const fakeMediaId = faker.datatype.uuid();

    const deleteStub = sandbox.stub(media, "delete").resolves();

    await media.delete(fakeMediaId);

    expect(deleteStub.calledOnce).to.be.true;
  });
});
