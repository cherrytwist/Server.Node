import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { IAgent } from '@domain/agent/agent/agent.interface';
import { Credential } from '@domain/agent/credential/credential.entity';
import { User } from '@domain/community/user/user.entity';
import { BaseCherrytwistEntity } from '@domain/common/base-entity';
import { ICredential } from '@domain/agent/credential/credential.interface';

@Entity()
export class Agent extends BaseCherrytwistEntity implements IAgent {
  @Column('text', { nullable: true })
  parentDisplayID?: string = '';

  @Column('varchar', { length: 255, nullable: true })
  did!: string;

  @Column('varchar', { length: 255, nullable: true })
  password!: string;

  @OneToMany(
    () => Credential,
    credential => credential.agent,
    {
      eager: true,
      cascade: true,
    }
  )
  credentials?: ICredential[];

  @OneToOne(
    () => User,
    user => user.agent,
    { eager: false, cascade: false }
  )
  user?: User;

  constructor() {
    super();
    this.did = '';
    this.password = '';
  }
}
