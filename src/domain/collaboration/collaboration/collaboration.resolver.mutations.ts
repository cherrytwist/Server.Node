import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import {} from '@domain/context/actor-group';
import { Profiling } from '@src/common/decorators';
import {
  CreateRelationInput,
  IRelation,
  Relation,
} from '@domain/collaboration/relation';
import {
  CreateProjectInput,
  Project,
  IProject,
} from '@domain/collaboration/project';
import { AuthorizationGlobalRoles } from '@common/decorators';
import { GraphqlGuard } from '@core/authorization';
import { CollaborationService } from './collaboration.service';
import { AuthorizationRoleGlobal } from '@common/enums';

@Resolver()
export class CollaborationResolverMutations {
  constructor(private collaborationService: CollaborationService) {}

  @AuthorizationGlobalRoles(AuthorizationRoleGlobal.Admin)
  @UseGuards(GraphqlGuard)
  @Mutation(() => Project, {
    description: 'Create a new Project on the Opportunity',
  })
  @Profiling.api
  async createProject(
    @Args('projectData') projectData: CreateProjectInput
  ): Promise<IProject> {
    const project = await this.collaborationService.createProject(projectData);
    return project;
  }

  @AuthorizationGlobalRoles(AuthorizationRoleGlobal.Admin)
  @UseGuards(GraphqlGuard)
  @Mutation(() => Relation, {
    description: 'Create a new Relation on the Collaboration.',
  })
  @Profiling.api
  async createRelation(
    @Args('relationData') relationData: CreateRelationInput
  ): Promise<IRelation> {
    return await this.collaborationService.createRelation(relationData);
  }
}