import { TestUser } from '@test/utils/token.helper';
import '@test/utils/array.matcher';
import { appSingleton } from '@test/utils/app.singleton';

import { getMutation, getVariables } from '@test/utils/update-mutations';

import { graphqlRequestAuth } from '@test/utils/graphql.request';
import { TestDataServiceInitResult } from '@utils/data-management/test-data.service';

const notAuthorizedCode = '"code":"FORBIDDEN"';

let data: TestDataServiceInitResult;

beforeAll(async () => {
  if (!appSingleton.Instance.app) await appSingleton.Instance.initServer();
  data = appSingleton.Instance.getData();
});

afterAll(async () => {
  if (appSingleton.Instance.app) await appSingleton.Instance.teardownServer();
});

describe('DDT ecoverse member user - Update mutations - authorized', () => {
  // Arrange
  test.each`
    mutation                                    | variables                                    | idName                        | expected
    ${'updateUserMutation'}                     | ${'updateUserVariables'}                     | ${'userId'}                   | ${notAuthorizedCode}
    ${'updateProfileMutation'}                  | ${'updateProfileVariables'}                  | ${'userProfileId'}            | ${notAuthorizedCode}
    ${'updateOrganisationMutation'}             | ${'updateOrganisationVariabls'}              | ${'organisationId'}           | ${notAuthorizedCode}
    ${'updateChallengeMutation'}                | ${'updateChallengeVariables'}                | ${'challengeId'}              | ${notAuthorizedCode}
    ${'updateOpportunityMutation'}              | ${'updateOpportunityVariables'}              | ${'opportunityId'}            | ${notAuthorizedCode}
    ${'updateAspectMutation'}                   | ${'updateAspectVariable'}                    | ${'aspectId'}                 | ${notAuthorizedCode}
    ${'updateActorMutation'}                    | ${'updateActorVariables'}                    | ${'actorId'}                  | ${notAuthorizedCode}
    ${'addUserToChallengeMutation'}             | ${'addUserToChallengeVariables'}             | ${'challengeId'}              | ${notAuthorizedCode}
    ${'addUserToOpportunityMutation'}           | ${'addUserToOpportunityVariables'}           | ${'opportunityId'}            | ${notAuthorizedCode}
    ${'assignGroupFocalPointMutation'}          | ${'assignGroupFocalPointVariables'}          | ${'groupIdEcoverse'}          | ${notAuthorizedCode}
    ${'removeGroupFocalPointMutation'}          | ${'removeGroupFocalPointVariables'}          | ${'createGroupOnChallengeId'} | ${notAuthorizedCode}
    ${'addChallengeLeadToOrganisationMutation'} | ${'addChallengeLeadToOrganisationVariables'} | ${'challengeId'}              | ${notAuthorizedCode}
    ${'removeUserFromGroupMutation'}            | ${'removeUserFromGroupVariables'}            | ${'addUserToOpportunityId'}   | ${notAuthorizedCode}
    ${'addTagsOnTagsetMutation'}                | ${'addTagsOnTagsetVariables'}                | ${'tagsetId'}                 | ${notAuthorizedCode}
    ${'replaceTagsOnTagsetMutation'}            | ${'replaceTagsOnTagsetVariables'}            | ${'tagsetId'}                 | ${notAuthorizedCode}
  `(
    "should NOT expect: '$expected' for update mutation: '$mutation' and variables: '$variables'",
    async ({ mutation, variables, idName, expected }) => {
      // Act

      const requestParamsUpdateMutations = {
        operationName: null,
        query: getMutation(mutation),
        variables: getVariables(
          variables,
          (data as Record<string, number>)[idName]
        ),
      };
      const response = await graphqlRequestAuth(
        requestParamsUpdateMutations,
        TestUser.ECOVERSE_ADMIN
      );
      const responseData = JSON.stringify(response.body).replace('\\', '');
      console.log(responseData);

      // Assert
      expect(response.status).toBe(200);
      expect(responseData).not.toContain(expected);
    }
  );
});
