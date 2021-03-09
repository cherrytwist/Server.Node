import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthorizationRoles } from '@src/core/authorization/authorization.roles';
import { GqlAuthGuard } from '@src/core/authorization/graphql.guard';
import { Roles } from '@common/decorators/roles.decorator';
import { RelationService } from './relation.service';

@Resolver()
export class RelationResolver {
  constructor(private relationService: RelationService) {}

  @Roles(AuthorizationRoles.CommunityAdmins, AuthorizationRoles.EcoverseAdmins)
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean, {
    description: 'Removes the relation with the specified ID',
  })
  async removeRelation(@Args('ID') relationID: number): Promise<boolean> {
    return await this.relationService.removeRelation(relationID);
  }
}