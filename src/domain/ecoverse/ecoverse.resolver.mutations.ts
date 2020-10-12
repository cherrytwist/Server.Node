import { Inject } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { Args, Mutation } from '@nestjs/graphql/dist/decorators';
import { UserGroup } from '../user-group/user-group.entity';
import { IUserGroup } from '../user-group/user-group.interface';
import { UserInput } from '../user/user.dto';
import { User } from '../user/user.entity';
import { IUser } from '../user/user.interface';
import { EcoverseInput } from './ecoverse.dto';
import { Ecoverse } from './ecoverse.entity';
import { IEcoverse } from './ecoverse.interface';
import { EcoverseService } from './ecoverse.service';

@Resolver()
export class EcoverseResolverMutations {
  constructor(
    @Inject(EcoverseService) private ecoverseService: EcoverseService
  ) {}

  @Mutation(() => UserGroup, {
    description: 'Creates a new user group at the ecoverse level',
  })
  async createGroupOnEcoverse(
    @Args({ name: 'groupName', type: () => String }) groupName: string
  ): Promise<IUserGroup> {
    const group = await this.ecoverseService.createGroup(groupName);
    return group;
  }

  @Mutation(() => Ecoverse, {
    description: 'Updates the Ecoverse with the provided data',
  })
  async updateEcoverse(
    @Args('ecoverseData') ecoverseData: EcoverseInput
  ): Promise<IEcoverse> {
    const ctVerse = await this.ecoverseService.update(ecoverseData);
    return ctVerse;
  }

  @Mutation(() => User, {
    description: 'Creates a new user as a member of the ecoverse',
  })
  async createUser(@Args('userData') userData: UserInput): Promise<IUser> {
    const user = await this.ecoverseService.createUser(userData);
    return user;
  }
}
