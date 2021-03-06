import { UseGuards } from '@nestjs/common';
import { Args, Resolver, Mutation } from '@nestjs/graphql';
import { OrganisationService } from './organisation.service';
import { CurrentUser, Profiling } from '@src/common/decorators';
import {
  CreateOrganisationInput,
  UpdateOrganisationInput,
  IOrganisation,
  DeleteOrganisationInput,
} from '@domain/community/organisation';
import { CreateUserGroupInput, IUserGroup } from '@domain/community/user-group';
import { GraphqlGuard } from '@core/authorization';
import { AuthorizationPrivilege, AuthorizationRoleGlobal } from '@common/enums';
import { OrganisationAuthorizationService } from './organisation.service.authorization';
import { AuthorizationEngineService } from '@src/services/platform/authorization-engine/authorization-engine.service';
import { AgentInfo } from '@core/authentication/agent-info';
import { UserGroupService } from '../user-group/user-group.service';
import { AuthorizationDefinitionService } from '@domain/common/authorization-definition/authorization.definition.service';
import { OrganisationAuthorizationResetInput } from './organisation.dto.reset.authorization';
import { UserGroupAuthorizationService } from '../user-group/user-group.service.authorization';
import { AssignOrganisationMemberInput } from './organisation.dto.assign.member';
import { RemoveOrganisationMemberInput } from './organisation.dto.remove.member';

@Resolver(() => IOrganisation)
export class OrganisationResolverMutations {
  constructor(
    private authorizationDefinitionService: AuthorizationDefinitionService,
    private userGroupService: UserGroupService,
    private userGroupAuthorizationService: UserGroupAuthorizationService,
    private organisationAuthorizationService: OrganisationAuthorizationService,
    private organisationService: OrganisationService,
    private authorizationEngine: AuthorizationEngineService
  ) {}

  @UseGuards(GraphqlGuard)
  @Mutation(() => IOrganisation, {
    description: 'Creates a new Organisation on the platform.',
  })
  @Profiling.api
  async createOrganisation(
    @CurrentUser() agentInfo: AgentInfo,
    @Args('organisationData') organisationData: CreateOrganisationInput
  ): Promise<IOrganisation> {
    const authorizationDefinition = this.authorizationEngine.createGlobalRolesAuthorizationDefinition(
      [AuthorizationRoleGlobal.CommunityAdmin, AuthorizationRoleGlobal.Admin],
      [AuthorizationPrivilege.CREATE]
    );
    await this.authorizationEngine.grantAccessOrFail(
      agentInfo,
      authorizationDefinition,
      AuthorizationPrivilege.CREATE,
      `create Organisation: ${organisationData.nameID}`
    );
    const organisation = await this.organisationService.createOrganisation(
      organisationData
    );

    return await this.organisationAuthorizationService.applyAuthorizationPolicy(
      organisation
    );
  }

  @UseGuards(GraphqlGuard)
  @Mutation(() => IUserGroup, {
    description: 'Creates a new User Group for the specified Organisation.',
  })
  @Profiling.api
  async createGroupOnOrganisation(
    @CurrentUser() agentInfo: AgentInfo,
    @Args('groupData') groupData: CreateUserGroupInput
  ): Promise<IUserGroup> {
    const organisation = await this.organisationService.getOrganisationOrFail(
      groupData.parentID
    );
    await this.authorizationEngine.grantAccessOrFail(
      agentInfo,
      organisation.authorization,
      AuthorizationPrivilege.CREATE,
      `orgCreateGroup: ${organisation.nameID}`
    );

    const group = await this.organisationService.createGroup(groupData);
    group.authorization = await this.authorizationDefinitionService.inheritParentAuthorization(
      group.authorization,
      organisation.authorization
    );
    return await this.userGroupAuthorizationService.applyAuthorizationPolicy(
      group
    );
  }

  @UseGuards(GraphqlGuard)
  @Mutation(() => IOrganisation, {
    description: 'Updates the specified Organisation.',
  })
  @Profiling.api
  async updateOrganisation(
    @CurrentUser() agentInfo: AgentInfo,
    @Args('organisationData') organisationData: UpdateOrganisationInput
  ): Promise<IOrganisation> {
    const organisation = await this.organisationService.getOrganisationOrFail(
      organisationData.ID
    );
    await this.authorizationEngine.grantAccessOrFail(
      agentInfo,
      organisation.authorization,
      AuthorizationPrivilege.UPDATE,
      `orgUpdate: ${organisation.nameID}`
    );

    return await this.organisationService.updateOrganisation(organisationData);
  }

  @UseGuards(GraphqlGuard)
  @Mutation(() => IOrganisation, {
    description: 'Deletes the specified Organisation.',
  })
  async deleteOrganisation(
    @CurrentUser() agentInfo: AgentInfo,
    @Args('deleteData') deleteData: DeleteOrganisationInput
  ): Promise<IOrganisation> {
    const organisation = await this.organisationService.getOrganisationOrFail(
      deleteData.ID
    );
    await this.authorizationEngine.grantAccessOrFail(
      agentInfo,
      organisation.authorization,
      AuthorizationPrivilege.DELETE,
      `deleteOrg: ${organisation.nameID}`
    );
    return await this.organisationService.deleteOrganisation(deleteData);
  }

  @UseGuards(GraphqlGuard)
  @Mutation(() => IOrganisation, {
    description:
      'Reset the Authorization Policy on the specified Organisation.',
  })
  @Profiling.api
  async authorizationPolicyResetOnOrganisation(
    @CurrentUser() agentInfo: AgentInfo,
    @Args('authorizationResetData')
    authorizationResetData: OrganisationAuthorizationResetInput
  ): Promise<IOrganisation> {
    const organisation = await this.organisationService.getOrganisationOrFail(
      authorizationResetData.organisationID
    );
    await this.authorizationEngine.grantAccessOrFail(
      agentInfo,
      organisation.authorization,
      AuthorizationPrivilege.UPDATE,
      `reset authorization definition on organisation: ${authorizationResetData.organisationID}`
    );
    return await this.organisationAuthorizationService.applyAuthorizationPolicy(
      organisation
    );
  }

  @UseGuards(GraphqlGuard)
  @Mutation(() => IOrganisation, {
    description: 'Assigns a User as a member of the specified Organisation.',
  })
  @Profiling.api
  async assignUserToOrganisation(
    @CurrentUser() agentInfo: AgentInfo,
    @Args('membershipData') membershipData: AssignOrganisationMemberInput
  ): Promise<IOrganisation> {
    const organisation = await this.organisationService.getOrganisationOrFail(
      membershipData.organisationID
    );
    await this.authorizationEngine.grantAccessOrFail(
      agentInfo,
      organisation.authorization,
      AuthorizationPrivilege.GRANT,
      `assign user organisation: ${organisation.displayName}`
    );
    return await this.organisationService.assignMember(membershipData);
  }

  @UseGuards(GraphqlGuard)
  @Mutation(() => IOrganisation, {
    description: 'Removes a User as a member of the specified Organisation.',
  })
  @Profiling.api
  async removeUserFromOrganisation(
    @CurrentUser() agentInfo: AgentInfo,
    @Args('membershipData') membershipData: RemoveOrganisationMemberInput
  ): Promise<IOrganisation> {
    const organisation = await this.organisationService.getOrganisationOrFail(
      membershipData.organisationID
    );
    await this.authorizationEngine.grantAccessOrFail(
      agentInfo,
      organisation.authorization,
      AuthorizationPrivilege.GRANT,
      `remove user organisation: ${organisation.displayName}`
    );
    return await this.organisationService.removeMember(membershipData);
  }
}
