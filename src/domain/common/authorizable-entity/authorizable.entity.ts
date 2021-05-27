import { BaseCherrytwistEntity } from '@domain/common/base-entity';
import { JoinColumn, OneToOne } from 'typeorm';
import { AuthorizationDefinition } from '../authorization-definition';
import { IAuthorizable } from './authorizable.interface';

export abstract class AuthorizableEntity extends BaseCherrytwistEntity
  implements IAuthorizable {
  @OneToOne(() => AuthorizationDefinition, {
    eager: true,
    cascade: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  authorization?: AuthorizationDefinition;

  constructor() {
    super();
  }
}
