import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Agreement } from '@domain/collaboration/agreement';
import { Aspect } from '@domain/context/aspect/aspect.entity';
import { Tagset } from '@domain/common/tagset/tagset.entity';
import { IProject } from './project.interface';
import { Lifecycle } from '@domain/common/lifecycle';
import { Opportunity } from '@domain/collaboration/opportunity';
import { BaseCherrytwistEntity } from '@domain/common/base-entity';

@Entity()
export class Project extends BaseCherrytwistEntity implements IProject {
  @Column()
  textID: string;

  @Column()
  ecoverseID?: string;

  @Column()
  name: string;

  @Column('text', { nullable: true })
  description?: string;

  @OneToOne(() => Lifecycle, { eager: false, cascade: true })
  @JoinColumn()
  life3cycle!: Lifecycle;

  @OneToOne(() => Tagset, { eager: true, cascade: true })
  @JoinColumn()
  tagset?: Tagset;

  @OneToMany(
    () => Aspect,
    aspect => aspect.project,
    { eager: true, cascade: true }
  )
  aspects?: Aspect[];

  @OneToMany(
    () => Agreement,
    agreement => agreement.project,
    { eager: true, cascade: true }
  )
  agreements?: Agreement[];

  @ManyToOne(
    () => Opportunity,
    opportunity => opportunity.projects
  )
  opportunity?: Opportunity;

  constructor(name: string, textID: string) {
    super();
    this.name = name;
    this.textID = textID;
  }
}
