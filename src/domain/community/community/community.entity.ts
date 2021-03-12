/* eslint-disable @typescript-eslint/no-inferrable-types */
import { ID } from '@nestjs/graphql/dist';
import { Field, ObjectType } from '@nestjs/graphql/dist/decorators';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IGroupable } from '@src/common/interfaces/groupable.interface';
import { UserGroup } from '@domain/community/user-group/user-group.entity';
import { ICommunity } from './community.interface';
import { Application } from '@domain/community/application/application.entity';
import { Challenge, Ecoverse, Opportunity } from '@domain/challenge';

@Entity()
@ObjectType()
export class Community extends BaseEntity implements ICommunity, IGroupable {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String, {
    nullable: false,
    description: 'The name of the challenge',
  })
  @Column()
  name: string;

  @OneToMany(
    () => UserGroup,
    userGroup => userGroup.community,
    { eager: true, cascade: true }
  )
  groups?: UserGroup[];

  @OneToMany(
    () => Application,
    application => application.community,
    { eager: true, cascade: true, onDelete: 'CASCADE' }
  )
  applications?: Application[];

  @OneToOne(
    () => Ecoverse,
    ecoverse => ecoverse.community,
    { eager: false, cascade: false }
  )
  ecoverse?: Ecoverse;

  @OneToOne(
    () => Challenge,
    challenge => challenge.community,
    { eager: false, cascade: false }
  )
  challenge?: Challenge;

  @OneToOne(
    () => Opportunity,
    opportunity => opportunity.community,
    { eager: false, cascade: false }
  )
  opportunity?: Opportunity;

  // The restricted group names at the Community level
  @Column('simple-array')
  restrictedGroupNames: string[];

  constructor(name: string, restrictedGroupNames: string[]) {
    super();
    this.name = name;
    this.restrictedGroupNames = restrictedGroupNames;
  }
}
