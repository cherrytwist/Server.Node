import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@src/core/authorization/graphql.guard';
import { Roles } from '@common/decorators/roles.decorator';
import { Profiling } from '@src/common/decorators';
import {
  CreateReferenceInput,
  Reference,
  IReference,
} from '@domain/common/reference';
import { ContextService } from './context.service';
import { AuthorizationRoles } from '@src/core/authorization/authorization.roles';

@Resolver()
export class ContextResolverMutations {
  constructor(private contextService: ContextService) {}

  @Roles(AuthorizationRoles.CommunityAdmins, AuthorizationRoles.EcoverseAdmins)
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Reference, {
    description:
      'Creates a new reference with the specified name for the context with given id',
  })
  @Profiling.api
  async createReferenceOnContext(
    @Args('referenceInput') referenceInput: CreateReferenceInput
  ): Promise<IReference> {
    const reference = await this.contextService.createReference(referenceInput);
    return reference;
  }
}