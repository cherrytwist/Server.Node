/* eslint-disable @typescript-eslint/no-inferrable-types */
import { ID } from '@nestjs/graphql/dist';
import { Field, ObjectType } from '@nestjs/graphql/dist/decorators';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IGroupable } from '../../interfaces/groupable.interface';
import { Challenge } from '../challenge/challenge.entity';
import { DID } from '../did/did.entity';
import { Profile } from '../profile/profile.entity';
import { Project } from '../project/project.entity';
import { RestrictedGroupNames } from '../user-group/user-group.entity';
import { IOpportunity } from './opportunity.interface';

@Entity()
@ObjectType()
export class Opportunity extends BaseEntity
  implements IOpportunity, IGroupable {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String, {
    nullable: false,
    description: 'The name of the Opportunity',
  })
  @Column('varchar', { length: 100 })
  name: string;

  @Field(() => String, {
    nullable: false,
    description: 'A short text identifier for this Opportunity',
  })
  @Column('varchar', { length: 15 })
  textID: string;

  // Other
  @Field(() => String, {
    nullable: true,
    description:
      'The maturity phase of the Opportunity i.e. new, being refined, ongoing etc',
  })
  @Column({ nullable: true })
  state: string;

  @Field(() => Profile, {
    nullable: true,
    description: 'The profile for this Opportunity',
  })
  @OneToOne(() => Profile, { eager: true, cascade: true })
  @JoinColumn()
  profile: Profile;

  @Field(() => [Project], {
    nullable: true,
    description: 'The set of projects within the context of this Opportunity',
  })
  @OneToMany(
    () => Project,
    project => project.opportunity,
    { eager: true, cascade: true }
  )
  projects?: Project[];

  @OneToOne(() => DID, { eager: true, cascade: true })
  @JoinColumn()
  DID!: DID;

  @ManyToOne(
    () => Challenge,
    challenge => challenge.opportunities
  )
  challenge?: Challenge;

  // The restricted group names at the Opportunity level
  restrictedGroupNames: string[];

  constructor(name: string, textID: string) {
    super();
    this.name = name;
    this.textID = textID;
    this.state = '';
    this.restrictedGroupNames = [RestrictedGroupNames.Members];
    this.profile = new Profile();
  }
}