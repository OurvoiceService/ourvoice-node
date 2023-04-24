import { Contacts } from "../src/resources/contacts";
import { Contact, NewContact } from "../src/resources/contacts/type"
import sinon, { SinonStub } from 'sinon';
import { expect, assert } from 'chai';

import { faker } from "@faker-js/faker";
describe('Contacts', () => {

    let contacts: Contacts;

    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox()
        contacts = new Contacts({
            apiKey: "Api Token"
        })
    });

    afterEach(() => {
        sandbox.restore();
    });


    it("should get all Contacts", async () => {


        const getContactStub = sandbox.stub(contacts, "getContacts").resolves();

        await contacts.getContacts()

        expect(getContactStub.calledOnce).to.be.true;
    })

    it("should create contacts", async () => {

        let fakeGroup: NewContact = {
            first_name: faker.name.fullName(),
            last_name: faker.lorem.text(),
            phone_number: "22991208623",
            language: faker.lorem.word()
        
        }
      
        const saveStub =  sandbox.stub(contacts, 'createContact').resolves();

        await contacts.createContact(fakeGroup);

        expect(saveStub.calledOnce).to.be.true;
    })

    it("should get contact by id", async () => {

        const fakeContactId = faker.datatype.uuid()
       
        const getContactByIdStub = sandbox.stub(contacts, 'getContactById').resolves();

        await contacts.getContactById(fakeContactId)

        expect(getContactByIdStub.calledOnceWithExactly(fakeContactId)).to.be.true;
    })
    it("should update contact", async ()=> {
        
        const fakeContactId = faker.datatype.uuid()
        const newGroup: Contact = {
            id:fakeContactId,
            last_name: faker.datatype.string(),
            first_name: faker.datatype.string(),
            phone_number: faker.datatype.string(),
            language: faker.datatype.string(),
        }

        const updateGroupStub = sandbox.stub(contacts, 'updateContact').resolves();

        await contacts.updateContact(fakeContactId, newGroup)

        expect(updateGroupStub.calledOnce).to.be.true;

    })

    it("should  delete group", async ()=> {
        
        const fakeContactId = faker.datatype.uuid()
      
        const deleteGroupStub = sandbox.stub(contacts, 'deleteContact').resolves();

        await contacts.deleteContact(fakeContactId)

        expect(deleteGroupStub.calledOnce).to.be.true;
    })

});

