import { DeleteBaseCherrytwistInput } from '@domain/common/base-entity';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DeleteProjectInput extends DeleteBaseCherrytwistInput {}
