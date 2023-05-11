import { Groups } from "../src/resources/groups";
import { Group, NewGroup } from "../src/resources/groups/type";
import sinon, { SinonStub } from "sinon";
import { expect, assert } from "chai";

import { faker } from "@faker-js/faker";
describe("Groups", () => {
  let groups: Groups;

  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    groups = new Groups({
      apiKey: "Api Token",
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should get all Groups", async () => {
    const getGroupStub = sandbox.stub(groups, "getGroups").resolves();

    await groups.getGroups();

    expect(getGroupStub.calledOnce).to.be.true;
  });

  it("should create groups", async () => {
    let fakeGroup: Group = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      description: faker.lorem.text(),
      contacts: {
        totalCount: 0,
        href: faker.internet.url(),
      },
      updated_at: "2023-04-14T16:39:56.000000Z",
      created_at: "2023-04-14T16:39:56.000000Z",
    };
    const newGroup: NewGroup = {
      name: fakeGroup.name,
      description: fakeGroup.description,
    };
    const saveStub = sandbox.stub(groups, "createGroup").resolves();

    await groups.createGroup(newGroup);

    // expect(saveStub).to.have.property('data');

    expect(saveStub.calledOnce).to.be.true;
  });

  it("should get group by id", async () => {
    const fakeGroupId = faker.datatype.uuid();

    const getGroupByIdStub = sandbox.stub(groups, "getGroupById").resolves();

    await groups.getGroupById(fakeGroupId);

    expect(getGroupByIdStub.calledOnceWithExactly(fakeGroupId)).to.be.true;
  });
  it("should update group", async () => {
    const fakeGroupId = faker.datatype.uuid();
    const newGroup: Group = {
      id: fakeGroupId,
      name: faker.datatype.string(),
      description: faker.datatype.string(),
      contacts: faker.datatype.json,
    };

    const updateGroupStub = sandbox.stub(groups, "updateGroup").resolves();

    await groups.updateGroup(fakeGroupId, newGroup);

    expect(updateGroupStub.calledOnce).to.be.true;
  });

  it("should delete group", async () => {
    const fakeGroupId = faker.datatype.uuid();

    const deleteGroupStub = sandbox.stub(groups, "deleteGroup").resolves();

    await groups.deleteGroup(fakeGroupId);

    expect(deleteGroupStub.calledOnce).to.be.true;
  });

  it("add contact to group", async () => {
    const fakeGroupId = faker.datatype.uuid();
    const fakeContactId = faker.datatype.uuid();

    const addContactToGroupStub = sandbox.stub(groups, "addContactToGroup").resolves();

    await groups.addContactToGroup(fakeGroupId, fakeContactId);

    expect(addContactToGroupStub.calledOnce).to.be.true;
  });

});

