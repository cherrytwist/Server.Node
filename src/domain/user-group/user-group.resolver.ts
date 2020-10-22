import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/utils/decorators/roles.decorator';
import { GqlAuthGuard } from '../../utils/authentication/graphql.guard';
import { RestrictedGroupNames, UserGroup } from './user-group.entity';
import { IUserGroup } from './user-group.interface';
import { UserGroupService } from './user-group.service';

@Resolver()
export class UserGroupResolver {
  constructor(private groupService: UserGroupService) {}

  @Roles(
    RestrictedGroupNames.CommunityAdmins,
    RestrictedGroupNames.EcoverseAdmins
  )
  @UseGuards(GqlAuthGuard)
  @Mutation(() => UserGroup, {
    description:
      'Adds the user with the given identifier to the specified user group',
  })
  async addUserToGroup(
    @Args('userID') userID: number,
    @Args('groupID') groupID: number
  ): Promise<IUserGroup> {
    const group = await this.groupService.addUser(userID, groupID);
    return group;
  }

  @Roles(
    RestrictedGroupNames.CommunityAdmins,
    RestrictedGroupNames.EcoverseAdmins
  )
  @UseGuards(GqlAuthGuard)
  @Mutation(() => UserGroup, {
    description:
      'Remove the user with the given identifier to the specified user group',
  })
  async removeUserFromGroup(
    @Args('userID') userID: number,
    @Args('groupID') groupID: number
  ): Promise<IUserGroup> {
    const group = await this.groupService.removeUser(userID, groupID);
    return group;
  }

  @Roles(
    RestrictedGroupNames.CommunityAdmins,
    RestrictedGroupNames.EcoverseAdmins
  )
  @UseGuards(GqlAuthGuard)
  @Mutation(() => UserGroup, {
    nullable: true,
    description:
      'Assign the user with the given ID as focal point for the given group',
  })
  async assignGroupFocalPoint(
    @Args('userID') userID: number,
    @Args('groupID') groupID: number
  ): Promise<IUserGroup> {
    const group = await this.groupService.assignFocalPoint(userID, groupID);
    return group;
  }

  @Roles(
    RestrictedGroupNames.CommunityAdmins,
    RestrictedGroupNames.EcoverseAdmins
  )
  @UseGuards(GqlAuthGuard)
  @Mutation(() => UserGroup, {
    nullable: true,
    description: 'Remove the focal point for the given group',
  })
  async removeGroupFocalPoint(
    @Args('groupID') groupID: number
  ): Promise<IUserGroup> {
    const group = await this.groupService.removeFocalPoint(groupID);
    return group;
  }
}
