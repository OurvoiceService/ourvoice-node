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

});

function now(): any {
    throw new Error("Function not implemented.");
}

