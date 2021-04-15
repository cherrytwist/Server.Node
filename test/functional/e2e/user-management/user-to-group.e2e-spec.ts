import {
  addUserToGroup,
  assignGroupFocalPointMutation,
  createUserDetailsMutation,
  getUsersFromChallengeCommunity,
  removeUserFromGroup,
  removeUserMutation,
} from './user.request.params';
import { graphqlRequestAuth } from '@test/utils/graphql.request';
import '@test/utils/array.matcher';
import {
  createGroupMutation,
  getGroup,
} from '@test/functional/integration/group/group.request.params';
import { appSingleton } from '@test/utils/app.singleton';
import { TestUser } from '../../../utils/token.helper';
import { createChallangeMutation } from '@test/functional/integration/challenge/challenge.request.params';
import { createGroupOnCommunityMutation } from '@test/functional/integration/community/community.request.params';

let userName = '';
let userFirstName = '';
let userLastName = '';
let userId = '';
let userPhone = '';
let userEmail = '';
let groupName = '';
let communityGroupId = '';
let challengeName = '';
let challengeCommunityId = '';
//let uniqueTextId = '';
let uniqueId = '';

beforeAll(async () => {
  if (!appSingleton.Instance.app) await appSingleton.Instance.initServer();
});

afterAll(async () => {
  if (appSingleton.Instance.app) await appSingleton.Instance.teardownServer();
});

beforeEach(async () => {
  uniqueId = Math.random()
    .toString(12)
    .slice(-6);
  // uniqueTextId = Math.random()
  //   .toString(12)
  //   .slice(-6);
  challengeName = `testChallenge ${uniqueId}`;
  userName = `testUser${uniqueId}`;
  userFirstName = `userFirstName${uniqueId}`;
  userLastName = `userLastName${uniqueId}`;
  userPhone = `userPhone ${uniqueId}`;
  userEmail = `${uniqueId}@test.com`;

  // Create user
  const responseCreateUser = await createUserDetailsMutation(
    userName,
    userFirstName,
    userLastName,
    userPhone,
    userEmail
  );
  userId = responseCreateUser.body.data.createUser.id;

  groupName = 'groupName ' + Math.random().toString();
  // Create challenge
  const responseCreateChallenge = await createChallangeMutation(
    challengeName,
    uniqueId
  );
  challengeCommunityId =
    responseCreateChallenge.body.data.createChallenge.community.id;

  // Create challenge community group
  const responseCreateGroupOnCommunnity = await createGroupOnCommunityMutation(
    challengeCommunityId,
    groupName
  );
  communityGroupId =
    responseCreateGroupOnCommunnity.body.data.createGroupOnCommunity.id;
});

describe('Users and Groups', () => {
  afterEach(async () => {
    await removeUserMutation(userId);
  });

  test('should add "user" to "group"', async () => {
    // Act
    const responseAddUserToGroup = await addUserToGroup(
      userId,
      communityGroupId
    );
    const getUsersForChallengeCommunity = await getUsersFromChallengeCommunity(
      communityGroupId
    );

    // Assert
    expect(responseAddUserToGroup.status).toBe(200);
    expect(responseAddUserToGroup.body.data.assignUserToGroup.id).toEqual(
      communityGroupId
    );
    expect(
      getUsersForChallengeCommunity.body.data.ecoverse.group.members[0].id
    ).toEqual(userId);
  });

  // check if we should have a validation
  test.skip('should throw error when add same "user", twice to same "group"', async () => {
    // Act
    await addUserToGroup(userId, communityGroupId);
    const responseAddSameUserToGroup = await addUserToGroup(
      userId,
      communityGroupId
    );

    // Assert
    expect(responseAddSameUserToGroup.status).toBe(200);
    expect(responseAddSameUserToGroup.text).toEqual(false);
  });

  test('should add same "user" to 2 different "groups"', async () => {
    // Arrange
    const testGroupTwo = 'testGroup2';
    const responseCreateGroupOnCommunnityTwo = await createGroupOnCommunityMutation(
      challengeCommunityId,
      testGroupTwo
    );
    let communityGroupIdTwo =
      responseCreateGroupOnCommunnityTwo.body.data.createGroupOnCommunity.id;

    // Act
    const responseAddUserToGroupOne = await addUserToGroup(
      userId,
      communityGroupId
    );

    const responseAddUserToGroupTwo = await addUserToGroup(
      userId,
      communityGroupIdTwo
    );

    // Assert
    expect(responseAddUserToGroupOne.status).toBe(200);
    expect(responseAddUserToGroupOne.body.data.assignUserToGroup.id).toEqual(
      communityGroupId
    );

    expect(responseAddUserToGroupTwo.status).toBe(200);
    expect(responseAddUserToGroupTwo.body.data.assignUserToGroup.id).toEqual(
      communityGroupIdTwo
    );
  });

  test('should remove "user" from a "group"', async () => {
    // Arrange
    await addUserToGroup(userId, communityGroupId);

    // Act
    const responseRemoveUserFromGroup = await removeUserFromGroup(
      userId,
      communityGroupId
    );

    // Assert
    expect(responseRemoveUserFromGroup.status).toBe(200);
    expect(responseRemoveUserFromGroup.body.data.removeUserFromGroup).toEqual(
      expect.objectContaining({
        name: groupName,
        members: [],
        id: communityGroupId,
      })
    );
    expect(
      responseRemoveUserFromGroup.body.data.removeUserFromGroup.members
    ).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ id: userId })])
    );
  });

  test('should delete a "user" after added in a "group"', async () => {
    // Arrange
    await addUserToGroup(userId, communityGroupId);

    // Act
    const responseRemoveUser = await removeUserMutation(userId);
    const getUsersForChallengeCommunity = await getUsersFromChallengeCommunity(
      communityGroupId
    );

    // Assert
    expect(responseRemoveUser.status).toBe(200);
    expect(responseRemoveUser.body.data.deleteUser.name).toBe(userName);
    expect(
      getUsersForChallengeCommunity.body.data.ecoverse.group.members
    ).toHaveLength(0);
  });

  test('should add "user" to "group" as focal point', async () => {
    // Act
    const responseAddUserToGroup = await assignGroupFocalPointMutation(
      userId,
      communityGroupId
    );

    // Assert
    expect(responseAddUserToGroup.status).toBe(200);
    expect(
      responseAddUserToGroup.body.data.assignGroupFocalPoint.focalPoint.name
    ).toEqual(userName);
  });

  test('should remove "user" assigned as focal point', async () => {
    // Arrange
    let groupIdWithFocalPoint = await assignGroupFocalPointMutation(
      userId,
      communityGroupId
    );
    let groupId = groupIdWithFocalPoint.body.data.assignGroupFocalPoint.id;

    // Act
    const responseDeleteUserFocalPoint = await removeUserMutation(userId);
    const getFocalPoint = await getGroup(groupId);

    // Assert
    expect(responseDeleteUserFocalPoint.status).toBe(200);
    expect(responseDeleteUserFocalPoint.body.data.deleteUser.name).toBe(
      userName
    );
    expect(getFocalPoint.body.data.ecoverse.group.focalPoint).toBe(null);
  });
});
