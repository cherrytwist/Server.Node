import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, MaxLength } from 'class-validator';
import {
  LONG_TEXT_LENGTH,
  SMALL_TEXT_LENGTH,
  MID_TEXT_LENGTH,
} from '@src/common/constants';
import { UpdateProfileInput } from '@domain/community/profile';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: false })
  ID!: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(LONG_TEXT_LENGTH)
  accountUpn!: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(SMALL_TEXT_LENGTH)
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(SMALL_TEXT_LENGTH)
  firstName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(SMALL_TEXT_LENGTH)
  lastName?: string;

  @Field({
    nullable: true,
    description: 'Email address is required for mutations!',
  })
  @IsEmail()
  @IsOptional()
  @MaxLength(MID_TEXT_LENGTH)
  email!: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(SMALL_TEXT_LENGTH)
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(SMALL_TEXT_LENGTH)
  city?: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(SMALL_TEXT_LENGTH)
  country?: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(SMALL_TEXT_LENGTH)
  gender?: string;

  @Field(() => UpdateProfileInput, { nullable: true })
  @IsOptional()
  profileData?: UpdateProfileInput;
}