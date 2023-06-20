import { Accounts } from "../src/resources/account";
import { AccountList, Account } from "../src/resources/account/type";
import sinon, { SinonStub } from "sinon";
import { expect, assert } from "chai";

import { faker } from "@faker-js/faker";
describe("Account", () => {
  let account: Accounts;

  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    account = new Accounts({
      apiKey: "Api Token",
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should get account", async () => {
    const getAccountStub = sandbox.stub(account, "getList").resolves();

    await account.getList();

    expect(getAccountStub.calledOnce).to.be.true;
  });

  it("should get account balance", async () => {
    const getAccountBalanceStub = sandbox.stub(account, "balance").resolves();

    await account.balance();

    expect(getAccountBalanceStub.calledOnce).to.be.true;
  });

  it("should get account by id", async () => {
    const fakeAccountId = faker.datatype.uuid();

    const readStub = sandbox.stub(account, "read").resolves();

    await account.read(fakeAccountId);

    expect(readStub.calledOnceWithExactly(fakeAccountId)).to.be.true;
  });
});
