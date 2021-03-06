import { Field, InputType } from '@nestjs/graphql';
import { CreateBaseChallengeInput } from '@domain/challenge/base-challenge/base.challenge.dto.create';
import { UUID_NAMEID } from '@domain/common/scalars/scalar.uuid.nameid';

@InputType()
export class CreateEcoverseInput extends CreateBaseChallengeInput {
  @Field(() => UUID_NAMEID, {
    nullable: false,
    description: 'The host Organisation for the ecoverse',
  })
  hostID!: string;
}
