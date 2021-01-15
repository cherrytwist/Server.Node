import { InputType, Field } from '@nestjs/graphql';
import { SMALL_TEXT_LENGTH, LONG_TEXT_LENGTH } from '@constants';
import { MaxLength } from 'class-validator';

@InputType()
export class RelationInput {
  @Field({ nullable: true })
  @MaxLength(SMALL_TEXT_LENGTH)
  type!: string;

  @Field({ nullable: true })
  @MaxLength(SMALL_TEXT_LENGTH)
  actorName!: string;

  @Field({ nullable: true })
  @MaxLength(SMALL_TEXT_LENGTH)
  actorType!: string;

  @Field({ nullable: true })
  @MaxLength(SMALL_TEXT_LENGTH)
  actorRole!: string;

  @Field({ nullable: true })
  @MaxLength(LONG_TEXT_LENGTH)
  description!: string;
}
