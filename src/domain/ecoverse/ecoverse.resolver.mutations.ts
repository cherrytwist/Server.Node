import { ChallengeInput } from '@domain/challenge/challenge.dto';
import { Challenge } from '@domain/challenge/challenge.entity';
import { IChallenge } from '@domain/challenge/challenge.interface';
import { OrganisationInput } from '@domain/organisation/organisation.dto';
import { Organisation } from '@domain/organisation/organisation.entity';
import { IOrganisation } from '@domain/organisation/organisation.interface';
import {
  RestrictedGroupNames,
  UserGroup,
} from '@domain/user-group/user-group.entity';
import { IUserGroup } from '@domain/user-group/user-group.interface';
import { UserInput } from '@domain/user/user.dto';
import { User } from '@domain/user/user.entity';
import { IUser } from '@domain/user/user.interface';
import { Inject, UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { Args, Mutation } from '@nestjs/graphql/dist/decorators';
import { GqlAuthGuard } from '@utils/auth/graphql.guard';
import { Roles } from '@utils/decorators/roles.decorator';
import { CherrytwistErrorStatus } from '@utils/error-handling/enums/cherrytwist.error.status';
import { AccountException } from '@utils/error-handling/exceptions';
import { LogContext } from '@utils/logging/logging.contexts';
import { Profiling } from '@utils/logging/logging.profiling.decorator';
import { EcoverseInput } from './ecoverse.dto';
import { Ecoverse } from './ecoverse.entity';
import { IEcoverse } from './ecoverse.interface';
import { EcoverseService } from './ecoverse.service';
import { Application } from '@domain/application/application.entity';
import { ApplicationInput } from '@domain/application/application.dto';

@Resolver()
export class EcoverseResolverMutations {
  constructor(
    @Inject(EcoverseService) private ecoverseService: EcoverseService
  ) {}

  @Roles(RestrictedGroupNames.EcoverseAdmins)
  @UseGuards(GqlAuthGuard)
  @Mutation(() => UserGroup, {
    description: 'Creates a new user group at the ecoverse level',
  })
  @Profiling.api
  async createGroupOnEcoverse(
    @Args({ name: 'groupName', type: () => String }) groupName: string
  ): Promise<IUserGroup> {
    const group = await this.ecoverseService.createGroup(groupName);
    return group;
  }

  @Roles(RestrictedGroupNames.EcoverseAdmins)
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Ecoverse, {
    description: 'Updates the Ecoverse with the provided data',
  })
  @Profiling.api
  async updateEcoverse(
    @Args('ecoverseData') ecoverseData: EcoverseInput
  ): Promise<IEcoverse> {
    const ctVerse = await this.ecoverseService.update(ecoverseData);
    return ctVerse;
  }

  @Roles(
    RestrictedGroupNames.CommunityAdmins,
    RestrictedGroupNames.EcoverseAdmins
  )
  @UseGuards(GqlAuthGuard)
  @Mutation(() => User, {
    description:
      'Creates a new user as a member of the ecoverse, including an account if enabled',
  })
  @Profiling.api
  async createUser(@Args('userData') userData: UserInput): Promise<IUser> {
    const user = await this.ecoverseService.createUser(userData);
    return user;
  }

  @Roles(
    RestrictedGroupNames.CommunityAdmins,
    RestrictedGroupNames.EcoverseAdmins
  )
  @UseGuards(GqlAuthGuard)
  @Mutation(() => User, {
    description:
      'Creates a new user as a member of the ecoverse, without an account',
  })
  @Profiling.api
  async createUserProfile(
    @Args('userData') userData: UserInput
  ): Promise<IUser> {
    const user = await this.ecoverseService.createUserProfile(userData);
    return user;
  }

  @Roles(
    RestrictedGroupNames.CommunityAdmins,
    RestrictedGroupNames.EcoverseAdmins
  )
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean, {
    description: 'Removes the specified user from the ecoverse',
  })
  @Profiling.api
  async removeUser(@Args('userID') userID: number): Promise<boolean> {
    const success = await this.ecoverseService.removeUser(userID);
    return success;
  }

  @Roles(
    RestrictedGroupNames.CommunityAdmins,
    RestrictedGroupNames.EcoverseAdmins
  )
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean, {
    description: 'Updates the user account password',
  })
  @Profiling.api
  async updateUserAccountPassword(): Promise<boolean> {
    throw new AccountException(
      'MS Graph API does not have production support for password update!',
      LogContext.API,
      CherrytwistErrorStatus.MS_GRAPH_METHOD_NOT_SUPPORTED
    );

    //const success = await this.ecoverseService.updateUserAccountPassword(userID, newPassword);
    //return success;
  }

  @Roles(RestrictedGroupNames.EcoverseAdmins)
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Challenge, {
    description: 'Creates a new challenge and registers it with the ecoverse',
  })
  @Profiling.api
  async createChallenge(
    @Args('challengeData') challengeData: ChallengeInput
  ): Promise<IChallenge> {
    const challenge = await this.ecoverseService.createChallenge(challengeData);

    return challenge;
  }

  @Roles(
    RestrictedGroupNames.CommunityAdmins,
    RestrictedGroupNames.EcoverseAdmins
  )
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Organisation, {
    description:
      'Creates a new organisation and registers it with the ecoverse',
  })
  @Profiling.api
  async createOrganisation(
    @Args('organisationData') organisationData: OrganisationInput
  ): Promise<IOrganisation> {
    const organisation = await this.ecoverseService.createOrganisation(
      organisationData
    );

    return organisation;
  }

  @Roles(
    RestrictedGroupNames.GlobalAdmins,
    RestrictedGroupNames.EcoverseAdmins,
    RestrictedGroupNames.CommunityAdmins
  )
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Application, {
    description: 'Create application to join this ecoverse',
  })
  @Profiling.api
  async createApplication(
    @Args('applicationData') applicationData: ApplicationInput
  ): Promise<Application> {
    return await this.ecoverseService.createApplication(applicationData);
  }
}
