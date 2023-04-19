import { Groups } from "../src/resources/groups";
import { Group, NewGroup } from "../src/resources/groups/type"
import sinon, { SinonStub } from 'sinon';
import { expect, assert } from 'chai';

import { faker } from "@faker-js/faker";
describe('Groups', () => {

    let groups: Groups;

    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox()
        groups = new Groups({
            apiKey: "1|vv85uaUEicKoB6sFQlcBpIFBfHIfS03EQ4cDIBgtBiePuCjXDRpuSLakUWjhY8KafJc5mFkGXK8uX8n36qMgtml91CFZotuSbhCLAt4k3sTQ6dS2yQHd9ekupeNgx8wSk1m81cO6YurJam5q5alcLGHjnxYFjKqIfVQqmBI4MGv4PWVT5MXVX2pjRW88GftX5GgyYcs4cBgkEmj1HHfq9cQZ3csBOXd6KvwWdZjXqeNA7Xad"
        })
    });

    afterEach(() => {
        sandbox.restore();
    });


    it("should getGroups", async () => {

        const getGroups = await groups.getGroups()

        expect(getGroups).to.be.an('object');
    })

    it("should create groups", async () => {

        let fakeGroup: Group = {
            id: faker.datatype.uuid(),
            name: faker.name.fullName(),
            description: faker.lorem.text(),
            contacts: {
                "totalCount": 0,
                "href": faker.internet.url()
            },
            //created_at: faker.date.(),
            updated_at: "2023-04-14T16:39:56.000000Z",
            created_at: "2023-04-14T16:39:56.000000Z"
        }
        const newGroup: NewGroup = {
            name: fakeGroup.name,
            description: fakeGroup.description
        }
        const saveStub = sandbox.stub(groups, 'createGroup').resolves();

        await groups.createGroup(newGroup);

        expect(saveStub.calledOnce).to.be.true;
    })

});

function now(): any {
    throw new Error("Function not implemented.");
}

