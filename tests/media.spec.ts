import { Medias } from "../src/resources/medias";
import { Media, NewMedia, UpdateMedia } from "../src/resources/medias/type"
import sinon, { SinonStub } from 'sinon';
import { expect, assert } from 'chai';

import { faker } from "@faker-js/faker";
describe('Medias', () => {

    let media: Medias;

    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox()
        media = new Medias({
            apiKey: "Api Token"
        })
    });

    afterEach(() => {
        sandbox.restore();
    });


    it("should get all Medias", async () => {


        const getMediaStub = sandbox.stub(media, "getMedias").resolves();

        await media.getMedias()

        expect(getMediaStub.calledOnce).to.be.true;
    })

    it("should save media", async () => {

        let fakeMedia: NewMedia = {
            file: faker.datatype.string(),
           
        }
        const saveStub =  sandbox.stub(media, 'saveMedia').resolves();

        await media.saveMedia(fakeMedia);

        expect(saveStub.calledOnce).to.be.true;
    })

    it("should get media by id", async () => {

        const fakeMediaId = faker.datatype.uuid()
       
        const getMediaByIdStub = sandbox.stub(media, 'getMediaById').resolves();

        await media.getMediaById(fakeMediaId)

        expect(getMediaByIdStub.calledOnceWithExactly(fakeMediaId)).to.be.true;
    })

    it("should update media", async ()=> {
        
        const fakeMediaId = faker.datatype.uuid()
        const mediaData: UpdateMedia = {
            name: faker.datatype.string(),
            media_url: faker.datatype.string(),
            type: faker.datatype.string(),
        }

        const updateMediaStub = sandbox.stub(media, "updateMedia").resolves();

        await media.updateMedia(fakeMediaId, mediaData)

        expect(updateMediaStub.calledOnce).to.be.true;

    })

    it("should  delete media", async ()=> {
        
        const fakeMediaId = faker.datatype.uuid()
      
        const deleteMediaStub = sandbox.stub(media, "deleteMedia").resolves();

        await media.deleteMedia(fakeMediaId)

        expect(deleteMediaStub.calledOnce).to.be.true;
    })

});

