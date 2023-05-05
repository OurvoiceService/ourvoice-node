import { Flows } from "../src/resources/flows";
import { Flow, UpdateFlowStatus } from "../src/resources/flows/type"
import sinon, { SinonStub } from 'sinon';
import { expect, assert } from 'chai';

import { faker } from "@faker-js/faker";
describe('Flow', () => {

    let flow: Flows;

    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox()
        flow = new Flows({
            apiKey: "Api token"
        })
    });

    afterEach(() => {
        sandbox.restore();
    });


    it("should getFlows", async () => {

        const getFlowStub = sandbox.stub(flow, 'getFlows').resolves();

        await flow.getFlows()

        expect(getFlowStub.calledOnce).to.be.true;

    })


    it('should get flow by id', async ()=> {
        
        const fakeFlowId = faker.datatype.uuid();
      
        const getFlowStub = sandbox.stub(flow, 'getFlowById').resolves();

        await flow.getFlowById(fakeFlowId);

        expect(getFlowStub.calledOnceWithExactly(fakeFlowId)).to.be.true;

        //expect(result["data"]).to.be.an('object');

    })

    it('should start flow', async ()=> {
        
        const fakeFlowId = faker.datatype.uuid();
      
        const startFlowStub = sandbox.stub(flow, 'startFlow').resolves();

        await flow.startFlow(fakeFlowId);

        expect(startFlowStub.calledOnceWithExactly(fakeFlowId)).to.be.true;

    })

    it('should update flow status', async ()=> {
        
        const fakeFlowId = faker.datatype.uuid();
      
        const flowStatus: UpdateFlowStatus = {
          status: 'paused'
        }

        const updateFlowStatusStub = sandbox.stub(flow, 'updateFlowStatus').resolves();

        await flow.updateFlowStatus(fakeFlowId, flowStatus);

        expect(updateFlowStatusStub.calledOnce).to.be.true;
    })

});


