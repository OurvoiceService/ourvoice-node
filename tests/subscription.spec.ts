import { Subscriptions } from "../src/resources/subscriptions";
import { NewSubscription } from "../src/resources/subscriptions/type"
import sinon, { SinonStub } from 'sinon';
import { expect, assert } from 'chai';

import { faker } from "@faker-js/faker";
describe('Subscriptions', () => {

    let subscription: Subscriptions;

    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox()
        subscription = new Subscriptions({
            apiKey: "Api Token"
        })
    });

    afterEach(() => {
        sandbox.restore();
    });


    it("should get all Subscriptions", async () => {


        const getSubscriptionStub = sandbox.stub(subscription, "getSubscriptions").resolves();

        await subscription.getSubscriptions()

        expect(getSubscriptionStub.calledOnce).to.be.true;
    })

    it("should create subscriptions", async () => {

        let fakeSubscription: NewSubscription = {
            plan_id: faker.datatype.uuid()
        }
      
        const saveStub =  sandbox.stub(subscription, 'newSubscription').resolves();

        await subscription.newSubscription(fakeSubscription);

        expect(saveStub.calledOnce).to.be.true;
    })

    it("should get subscription by id", async () => {

        const fakeSubscriptionId = faker.datatype.uuid()
       
        const getSubscriptionByIdStub = sandbox.stub(subscription, 'getSubscriptionById').resolves();

        await subscription.getSubscriptionById(fakeSubscriptionId)

        expect(getSubscriptionByIdStub.calledOnceWithExactly(fakeSubscriptionId)).to.be.true;
    })

    it("should  delete subscription", async ()=> {
        
        const fakeSubscriptionId = faker.datatype.uuid()
      
        const deleteSubscriptionStub = sandbox.stub(subscription, 'deleteSubscription').resolves();

        await subscription.deleteSubscription(fakeSubscriptionId)

        expect(deleteSubscriptionStub.calledOnce).to.be.true;
    })

});

