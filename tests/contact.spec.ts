import { Contacts } from "../src/resources/contacts";
import { Contact, NewContact, UpdateContact } from "../src/resources/contacts/type"
import sinon, { SinonStub } from 'sinon';
import { expect, assert } from 'chai';

import { faker } from "@faker-js/faker";
describe('Contacts', () => {

    let contact: Contacts;

    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox()
        contact = new Contacts({
            apiKey: "Api Token"
        })
    });

    afterEach(() => {
        sandbox.restore();
    });


    it("should get all Contacts", async () => {


        const getContactStub = sandbox.stub(contact, "getContacts").resolves();

        await contact.getContacts()

        expect(getContactStub.calledOnce).to.be.true;
    })

    it("should create contact", async () => {

        let fakeContact: NewContact = {
            first_name: faker.name.fullName(),
            last_name: faker.lorem.text(),
            phone_number: "22991208623",
            language: faker.lorem.word()
        
        }
      
        const saveStub =  sandbox.stub(contact, 'createContact').resolves();

        await contact.createContact(fakeContact);

        expect(saveStub.calledOnce).to.be.true;
    })

    it("should get contact by id", async () => {

        const fakeContactId = faker.datatype.uuid()
       
        const getContactByIdStub = sandbox.stub(contact, 'getContactById').resolves();

        await contact.getContactById(fakeContactId)

        expect(getContactByIdStub.calledOnceWithExactly(fakeContactId)).to.be.true;
    })
    it("should update contact", async ()=> {
        
        const fakeContactId = faker.datatype.uuid()
        const contactData: UpdateContact = {
            last_name: faker.datatype.string(),
            first_name: faker.datatype.string(),
            phone_number: faker.datatype.string(),
            language: faker.datatype.string(),
        }

        const updateContactStub = sandbox.stub(contact, 'updateContact').resolves();

        await contact.updateContact(fakeContactId, contactData)

        expect(updateContactStub.calledOnce).to.be.true;

    })

    it("should  delete contact", async ()=> {
        
        const fakeContactId = faker.datatype.uuid()
      
        const deleteContactStub = sandbox.stub(contact, 'deleteContact').resolves();

        await contact.deleteContact(fakeContactId)

        expect(deleteContactStub.calledOnce).to.be.true;
    })

});

