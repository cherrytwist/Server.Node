import { Args, Query, Resolver } from '@nestjs/graphql';
import { Profiling } from '@src/common/decorators';
import { Challenge, IChallenge } from '.';
import { ChallengeService } from './challenge.service';

@Resolver()
export class ChallengeResolverQueries {
  constructor(private challengeService: ChallengeService) {}

  @Query(() => [Challenge], {
    nullable: false,
    description: 'The Challenges on this platform',
  })
  @Profiling.api
  async challenges(): Promise<IChallenge[]> {
    return await this.challengeService.getChallenges();
  }

  @Query(() => Challenge, {
    nullable: false,
    description: 'A particular challenge',
  })
  @Profiling.api
  async challenge(@Args('ID') id: number): Promise<IChallenge> {
    return await this.challengeService.getChallengeOrFail(id);
  }
}