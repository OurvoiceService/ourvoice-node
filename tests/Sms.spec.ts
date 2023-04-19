import { SMS } from "../src/resources/sms";
import { Sms, NewSms } from "../src/resources/sms/type"
import sinon, { SinonStub } from 'sinon';
import { expect, assert } from 'chai';

import { faker } from "@faker-js/faker";
describe('sms', () => {

    let sms: SMS;

    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox()
        sms = new SMS({
            apiKey: "1|vv85uaUEicKoB6sFQlcBpIFBfHIfS03EQ4cDIBgtBiePuCjXDRpuSLakUWjhY8KafJc5mFkGXK8uX8n36qMgtml91CFZotuSbhCLAt4k3sTQ6dS2yQHd9ekupeNgx8wSk1m81cO6YurJam5q5alcLGHjnxYFjKqIfVQqmBI4MGv4PWVT5MXVX2pjRW88GftX5GgyYcs4cBgkEmj1HHfq9cQZ3csBOXd6KvwWdZjXqeNA7Xad"
        })
    });

    afterEach(() => {
        sandbox.restore();
    });


    it("should getsms", async () => {

        const getSmsStub = sandbox.stub(sms, 'getSms').resolves();

        await sms.getSms()

        expect(getSmsStub.calledOnce).to.be.true;

    })

    it("should send sms", async () => {

        let fakeSms: NewSms = {
           to: ["22996328451"],
           body: faker.lorem.text(),
           sender_id:faker.datatype.uuid()
        }
       
        const saveStub = sandbox.stub(sms, 'sendSms').resolves();

        await sms.sendSms(fakeSms);

        expect(saveStub.calledOnce).to.be.true;
    })


    it('get sms by id', async ()=> {
        
        const fakeSmsId = faker.datatype.uuid();
        const fakeSms: Sms = {
            id: fakeSmsId,
            account_id: faker.datatype.uuid(),
            body: faker.lorem.sentence(20),
            from: faker.datatype.string(),
            to: faker.lorem.paragraph(),
            direction: faker.datatype.string(),
            status: faker.datatype.string(),
            cost: faker.datatype.number(),
            currency: faker.datatype.string(),
            created_at: faker.datatype.datetime(),
            updated_at: faker.datatype.datetime(),
        }
        const getSmsStub = sandbox.stub(sms, 'getSmsById').resolves();

        await sms.getSmsById(fakeSmsId);

        expect(getSmsStub.calledOnceWithExactly(fakeSmsId)).to.be.true;

        //expect(result["data"]).to.be.an('object');

    })
});

function now(): any {
    throw new Error("Function not implemented.");
}

