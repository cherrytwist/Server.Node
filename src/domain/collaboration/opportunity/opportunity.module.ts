import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Opportunity } from '@domain/collaboration/opportunity';
import { OpportunityService } from './opportunity.service';
import { ProjectModule } from '../project/project.module';
import { RelationModule } from '../relation/relation.module';
import { OpportunityResolverFields } from './opportunity.resolver.fields';
import { OpportunityResolverMutations } from './opportunity.resolver.mutations';
import { BaseChallengeModule } from '@domain/challenge/base-challenge/base.challenge.module';

@Module({
  imports: [
    ProjectModule,
    RelationModule,
    BaseChallengeModule,
    TypeOrmModule.forFeature([Opportunity]),
  ],
  providers: [
    OpportunityService,
    OpportunityResolverFields,
    OpportunityResolverMutations,
  ],
  exports: [OpportunityService],
})
export class OpportunityModule {}