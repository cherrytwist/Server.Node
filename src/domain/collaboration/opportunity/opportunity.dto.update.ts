import { InputType } from '@nestjs/graphql';
import { UpdateBaseChallengeInput } from '@domain/challenge/base-challenge';

@InputType()
export class UpdateOpportunityInput extends UpdateBaseChallengeInput {}