import { InputType, Field } from '@nestjs/graphql';
import { AuthorizationCredential } from '@common/enums';

@InputType()
export class GrantAuthorizationCredentialInput {
  @Field({
    nullable: false,
    description: 'The user to whom the credential is being granted.',
  })
  userID!: string;

  @Field(() => AuthorizationCredential, {
    nullable: false,
  })
  type!: AuthorizationCredential;

  @Field({
    nullable: true,
    description: 'The resource to which this credential is tied.',
  })
  resourceID?: string;
}
