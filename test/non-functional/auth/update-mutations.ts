const userId = 4;
const organisationId = 1;

export const updateUserMutation = `
mutation UpdateUser($userID: Float!, $userData: UserInput!) {
    updateUser(userID: $userID, userData: $userData) {
      id
      name
      email
      city
    }
  }`;

export const updateUserVariables = (id: number) => `
{
    "userID": ${userId},
    "userData":
    {
      "name": "TestName",
      "city": "TestCity"
    }
  }`;

export const updateProfileMutation = `
mutation updateProfile($profileData: ProfileInput!, $ID: Float!) {
    updateProfile(profileData: $profileData, ID: $ID)
  }`;

export const updateProfileVariables = (id: number) => `
{
    "ID": ${id},
    "profileData": {
      "description": "some description",
      "avatar": "https://avatar.com"
    }
  }`;

export const updateOrganisationMutation = `
mutation updateOrganisation($orgID: Float!, $organisationData: OrganisationInput!) {
    updateOrganisation(orgID: $orgID, organisationData: $organisationData) {
      name,
      id
    }
  }`;

export const updateOrganisationVariabls = (id: number) => `
{
    "orgID": ${id},
    "organisationData":
    {
      "name": "Cherrytwist2"
    }
  }`;

export const updateChallengeMutation = `
mutation updateChallenge($challengeData: UpdateChallengeInput!) {
    updateChallenge(challengeData: $challengeData) {
      name,
      id
    }
  }`;

export const updateChallengeVariables = (id: number) => `
{

    "challengeData":
          {
            "ID": ${id},
            "name": "Challenge with better name"
          }
  }`;

export const updateOpportunityMutation = `
mutation updateOpportunity($opportunityData: OpportunityInput!, $ID: Float!) {
    updateOpportunity(opportunityData: $opportunityData, ID: $ID) {
      name,
      id
    }
  }`;

export const updateOpportunityVariables = (id: number) => `
{
    "ID": ${id},
    "opportunityData":
    {
      "name": "Test Oportunity "
    }
  }`;

export const updateAspectMutation = `
mutation updateAspect($aspectData: AspectInput!, $ID: Float!) {
    updateAspect(aspectData: $aspectData, ID: $ID) {
      title
      id
    }
  }`;

export const updateAspectVariable = (id: number) => `
{
    "ID": ${id},
    "aspectData": {
      "title": "aspect some description",
      "framing": "https://aspect_framing.com",
      "explanation": "https://aspect_explanation.com"
    }
  }`;

export const updateActorMutation = `
mutation updateActor($actorData: ActorInput!, $ID: Float!) {
    updateActor(actorData: $actorData, ID: $ID) {
      name
      description
      value
      impact
      id
    }
  }`;

export const updateActorVariables = (id: number) => `
{
    "ID": ${id},
    "actorData": {
      "name": "actor some description",
      "value": "https://actor_value.com",
      "impact": "https://actor_impact.com",
      "description": "actor something"
    }
  }`;

export const addTagsOnTagsetMutation = `
mutation addTagToTagset($tag: String!, $tagsetID: Float!) {
    addTagToTagset(tag: $tag, tagsetID: $tagsetID) {
      name
      tags
      id
    }
  }`;

export const addTagsOnTagsetVariables = (id: number) => `
{
    "tagsetID": ${id},
    "tag": "tagTest"
  }`;

export const replaceTagsOnTagsetMutation = `
mutation replaceTagsOnTagset($tags: [String!]!, $tagsetID: Float!) {
    replaceTagsOnTagset(tags: $tags, tagsetID: $tagsetID){
      name
      tags
    }
  }`;

export const replaceTagsOnTagsetVariables = (id: number) => `
{
    "tagsetID": ${id},
    "tags": ["tag1", "tag2"]
  }`;

export const addUserToChallengeMutation = `
mutation addUserToChallenge($userID: Float!, $challengeID: Float!) {
    addUserToChallenge(challengeID: $challengeID, userID: $userID) {
      name,
      id,
      members {
        id,
        name
      }
    }
  }`;

export const addUserToChallengeVariables = (id: number) => `
{
    "userID": ${userId},
    "challengeID": ${id}
  }`;

export const addUserToGroupMutation = `
mutation addUserToGroup($userID: Float!, $groupID: Float!) {
    addUserToGroup(groupID: $groupID, userID: $userID)
  }`;

export const addUserToGroupVariables = (id: number) => `
{
    "userID": ${userId},
    "groupID": ${id}
  }`;

export const addUserToOpportunityMutation = `
mutation addUserToOpportunity($userID: Float!, $opportunityID: Float!) {
    addUserToOpportunity(opportunityID: $opportunityID, userID: $userID) {
      name,
      id,
      members {
        id,
        name
      }
    }
  }`;

export const addUserToOpportunityVariables = (id: number) => `
{
    "userID": ${userId},
    "opportunityID": ${id}
  }`;

export const assignGroupFocalPointMutation = `
mutation assignGroupFocalPoint($userID: Float!, $groupID: Float!) {
    assignGroupFocalPoint(groupID: $groupID, userID: $userID) {
      name,
      id,
      focalPoint {
        name
      }
    }
  }`;

export const assignGroupFocalPointVariables = (id: number) => `
  {
    "userID": ${userId},
    "groupID": ${id}
  }`;

export const removeGroupFocalPointMutation = `
mutation removeGroupFocalPoint($groupID: Float!) {
    removeGroupFocalPoint(groupID: $groupID) {
      name,
      id,
      focalPoint {
        name
      }
    }
  }`;

export const removeGroupFocalPointVariables = (id: number) => `
{
    "groupID": ${id}
  }`;

export const addChallengeLeadToOrganisationMutation = `
mutation addChallengeLead($challengeID: Float!, $organisationID: Float!) {
    addChallengeLead(organisationID: $organisationID, challengeID: $challengeID)
  }`;

export const addChallengeLeadToOrganisationVariables = (id: number) => `
{
    "organisationID": ${organisationId},
    "challengeID": ${id}
  }`;

export const removeUserFromGroupMutation = `
mutation removeUserFromGroup($userID: Float!, $groupID: Float!) {
    removeUserFromGroup(groupID: $groupID, userID: $userID) {
      name,
      id,
      members {
        id,
        name
      }
    }
  }`;

export const removeUserFromGroupVariables = (id: number) => `
{
    "userID": ${userId},
    "groupID": ${id}
  }`;

const mutations: Record<string, string> = {
  updateUserMutation,
  updateProfileMutation,
  updateOrganisationMutation,
  updateChallengeMutation,
  updateOpportunityMutation,
  updateAspectMutation,
  updateActorMutation,
  addTagsOnTagsetMutation,
  replaceTagsOnTagsetMutation,
  addUserToChallengeMutation,
  addUserToGroupMutation,
  addUserToOpportunityMutation,
  assignGroupFocalPointMutation,
  removeGroupFocalPointMutation,
  addChallengeLeadToOrganisationMutation,
  removeUserFromGroupMutation,
};

const variables: Record<string, (id: number) => string> = {
  updateUserVariables,
  updateProfileVariables,
  updateOrganisationVariabls,
  updateChallengeVariables,
  updateOpportunityVariables,
  updateAspectVariable,
  updateActorVariables,
  addTagsOnTagsetVariables,
  replaceTagsOnTagsetVariables,
  addUserToChallengeVariables,
  addUserToGroupVariables,
  addUserToOpportunityVariables,
  assignGroupFocalPointVariables,
  removeGroupFocalPointVariables,
  addChallengeLeadToOrganisationVariables,
  removeUserFromGroupVariables,
};

export const getUpdateMutation = (name: string) => {
  return mutations[name];
};

export const getUpdateVariables = (name: string, id: number) => {
  return variables[name](id);
};