import { Contacts } from "../src/resources/contacts";
import {
  Contact,
  NewContact,
  UpdateContact,
} from "../src/resources/contacts/type";
import sinon, { SinonStub } from "sinon";
import { expect, assert } from "chai";

import { faker } from "@faker-js/faker";
describe("Contacts", () => {
  let contact: Contacts;

  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    contact = new Contacts({
      apiKey: "Api Token",
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should get all Contacts", async () => {
    const getContactStub = sandbox.stub(contact, "getList").resolves();

    await contact.getList();

    expect(getContactStub.calledOnce).to.be.true;
  });

  it("should create contact", async () => {
    let fakeContact: NewContact = {
      first_name: faker.name.fullName(),
      last_name: faker.lorem.text(),
      phone_number: "22991208623",
      language: faker.lorem.word(),
    };

    const saveStub = sandbox.stub(contact, "create").resolves();

    await contact.create(fakeContact);

    expect(saveStub.calledOnce).to.be.true;
  });

  it("should get contact by id", async () => {
    const fakeContactId = faker.datatype.uuid();

    const readStub = sandbox
      .stub(contact, "read")
      .resolves();

    await contact.read(fakeContactId);

    expect(readStub.calledOnceWithExactly(fakeContactId)).to.be.true;
  });
  it("should update contact", async () => {
    const fakeContactId = faker.datatype.uuid();
    const contactData: UpdateContact = {
      last_name: faker.datatype.string(),
      first_name: faker.datatype.string(),
      phone_number: faker.datatype.string(),
      language: faker.datatype.string(),
    };

    const updateStub = sandbox.stub(contact, "update").resolves();

    await contact.update(fakeContactId, contactData);

    expect(updateStub.calledOnce).to.be.true;
  });

  it("should  delete contact", async () => {
    const fakeContactId = faker.datatype.uuid();

    const deleteStub = sandbox.stub(contact, "delete").resolves();

    await contact.delete(fakeContactId);

    expect(deleteStub.calledOnce).to.be.true;
  });
});
