import { Accounts } from "../src/resources/account";
import { AccountList, Account } from "../src/resources/account/type"
import sinon, { SinonStub } from 'sinon';
import { expect, assert } from 'chai';

import { faker } from "@faker-js/faker";
describe('Account', () => {

    let account: Accounts;

    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox()
        account = new Accounts({
            apiKey: "Api Token"
        })
    });

    afterEach(() => {
        sandbox.restore();
    });


    it("should get account", async () => {

        const getAccountStub = sandbox.stub(account, "getAccounts").resolves();

        await account.getAccounts()

        expect(getAccountStub.calledOnce).to.be.true;
    })


    it("should get account balance", async () => {

        const getAccountBalanceStub = sandbox.stub(account, "getCurrentAccountBalance").resolves();

        await account.getCurrentAccountBalance()

        expect(getAccountBalanceStub.calledOnce).to.be.true;
    })


    it("should get account by id", async () => {

        const fakeAccountId = faker.datatype.uuid()
       
        const getAccountByIdStub = sandbox.stub(account, 'getAccountById').resolves();

        await account.getAccountById(fakeAccountId)

        expect(getAccountByIdStub.calledOnceWithExactly(fakeAccountId)).to.be.true;
    })
 
});

