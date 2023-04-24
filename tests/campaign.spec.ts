import { Campaigns } from "../src/resources/Campaigns";
import { Campaign, NewCampaign } from "../src/resources/Campaigns/type"
import sinon, { SinonStub } from 'sinon';
import { expect, assert } from 'chai';

import { faker } from "@faker-js/faker";
describe('Compaign test', () => {

    let campaign: Campaigns;

    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox()
        campaign = new Campaigns({
            apiKey: "api token"
        })
    });

    afterEach(() => {
        sandbox.restore();
    });


    it("should get all campaigns", async () => {

        const getCompainStub = sandbox.stub(campaign, 'getCampaigns').resolves();

        await campaign.getCampaigns()

        expect(getCompainStub.calledOnce).to.be.true;
    })

    it("should create campaign", async () => {

        const newCompagne: NewCampaign = {
            body: faker.datatype.string(),
            sender_id: faker.datatype.string(),
            group: faker.datatype.json,
            type: faker.datatype.string(),
            voices: faker.internet.url(),
            messages: faker.datatype.string(),
            name: faker.name.fullName(),
            repeat: faker.datatype.string(),
            start_date: faker.datatype.datetime(),
            end_date: faker.datatype.datetime(),
            status: faker.datatype.string(),
        }

        const createCompainStub = sandbox.stub(campaign, 'createCampaign').resolves();

        const a = await campaign.createCampaign(newCompagne)

        expect(createCompainStub.calledOnce).to.be.true;
    })

    it("should get compaign by id", async () => {

        const fakeCompaignId = faker.datatype.uuid()
       
        const getCompainByIdStub = sandbox.stub(campaign, 'getCampaignById').resolves();

        await campaign.getCampaignById(fakeCompaignId)

        expect(getCompainByIdStub.calledOnceWithExactly(fakeCompaignId)).to.be.true;
    })

    it("should update compaign", async ()=> {
        
        const fakeCompaignId = faker.datatype.uuid()
        const newCompagne: NewCampaign = {
            body: faker.datatype.string(),
            sender_id: faker.datatype.string(),
            group: faker.datatype.json,
            type: faker.datatype.string(),
            voices: faker.internet.url(),
            messages: faker.datatype.string(),
            name: faker.name.fullName(),
            repeat: faker.datatype.string(),
            start_date: faker.datatype.datetime(),
            end_date: faker.datatype.datetime(),
            status: faker.datatype.string(),
        }

        const updateCompainStub = sandbox.stub(campaign, 'updateCampaign').resolves();

        await campaign.updateCampaign(fakeCompaignId, newCompagne)

        expect(updateCompainStub.calledOnce).to.be.true;

    })

    it("should delete compaign", async ()=> {
        
        const fakeCompaignId = faker.datatype.uuid()

        const deleteCompainStub = sandbox.stub(campaign, 'deleteCampaign').resolves();

        await campaign.deleteCampaign(fakeCompaignId)

        expect(deleteCompainStub.calledOnce).to.be.true;

    })

});

function now(): any {
    throw new Error("Function not implemented.");
}

