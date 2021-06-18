/* eslint-disable @typescript-eslint/no-inferrable-types */
import { JoinColumn, OneToOne } from 'typeorm';
import { Tagset } from '@domain/common/tagset/tagset.entity';
import { Lifecycle } from '@domain/common/lifecycle/lifecycle.entity';
import { Community } from '@domain/community/community/community.entity';
import { Context } from '@domain/context/context/context.entity';
import { NameableEntity } from '@domain/common/nameable-entity';
import { IBaseChallenge } from './base.challenge.interface';
import { Agent } from '@domain/agent/agent/agent.entity';

export abstract class BaseChallenge extends NameableEntity
  implements IBaseChallenge {
  @OneToOne(() => Context, { eager: false, cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  context?: Context;

  @OneToOne(
    () => Community,
    community => community.challenge,
    { eager: false, cascade: true, onDelete: 'CASCADE' }
  )
  @JoinColumn()
  community?: Community;

  @OneToOne(() => Lifecycle, { eager: false, cascade: true })
  @JoinColumn()
  lifecycle!: Lifecycle;

  @OneToOne(() => Tagset, { eager: true, cascade: true })
  @JoinColumn()
  tagset?: Tagset;

  @OneToOne(() => Agent, { eager: false, cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  agent?: Agent;

  constructor() {
    super();
    this.displayName = '';
    this.nameID = '';
  }
}
