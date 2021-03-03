import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@utils/authorisation/graphql.guard';
import { Roles } from '@utils/authorisation/roles.decorator';
import { Profiling } from '@utils/logging/logging.profiling.decorator';
import { RestrictedGroupNames } from '@domain/user-group/user-group.entity';
import { User } from './user.entity';
import { IUser } from './user.interface';
import { UserService } from './user.service';
import { AuthenticationException } from '@utils/error-handling/exceptions';
import { AuthenticatedUserDTO } from '@utils/auth/authenticated.user.dto';
import { AuthenticatedUser } from '@utils/auth/authenticated.user.decorator';

@Resolver(() => User)
export class UserResolverQueries {
  constructor(private userService: UserService) {}

  @Roles(RestrictedGroupNames.Members)
  @UseGuards(GqlAuthGuard)
  @Query(() => [User], {
    nullable: false,
    description: 'The users who have profiles on this platform',
  })
  @Profiling.api
  async users(): Promise<IUser[]> {
    return await this.userService.getUsers();
  }

  @Roles(RestrictedGroupNames.Members)
  @UseGuards(GqlAuthGuard)
  //should be in user queries
  @Query(() => User, {
    nullable: false,
    description: 'A particular user, identified by the ID or by email',
  })
  @Profiling.api
  async user(@Args('ID') id: string): Promise<IUser> {
    return await this.userService.getUserOrFail(id);
  }

  @Roles(RestrictedGroupNames.Members)
  @UseGuards(GqlAuthGuard)
  //should be in user queries
  @Query(() => [User], {
    nullable: false,
    description: 'The users filtered by list of IDs.',
  })
  @Profiling.api
  async usersById(
    @Args({ name: 'IDs', type: () => [String] }) ids: string[]
  ): Promise<IUser[]> {
    const users = await this.userService.getUsers();
    return users.filter(x => {
      return ids ? ids.indexOf(x.id.toString()) > -1 : false;
    });
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, {
    nullable: false,
    description: 'The currently logged in user',
  })
  @Profiling.api
  async me(
    @AuthenticatedUser() authUser: AuthenticatedUserDTO
  ): Promise<IUser> {
    if (!authUser) {
      throw new AuthenticationException(
        'Unable to retrieve authenticated user.'
      );
    }
    if (!authUser.ctUser) {
      throw new AuthenticationException('Unable to retrieve user profile.');
    }
    return authUser.ctUser;
  }
}
