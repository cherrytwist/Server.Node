import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Profile } from '@domain/community/profile/profile.entity';
import { UserGroup } from '@domain/community/user-group/user-group.entity';
/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { IUser } from './user.interface';
import { Application } from '@domain/community/application/application.entity';
import { Agent } from '@domain/agent/agent';

@Entity()
@ObjectType()
export class User extends BaseEntity implements IUser {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  updatedDate?: Date;

  @VersionColumn()
  version?: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String, {
    description:
      'The unique personal identifier (upn) for the account associated with this user profile',
  })
  @Column()
  accountUpn: string = '';

  @Field(() => String)
  @Column()
  firstName: string = '';

  @Field(() => String)
  @Column()
  lastName: string = '';

  @Field(() => String)
  @Column()
  email: string = '';

  @Field(() => String)
  @Column()
  phone: string = '';

  @Field(() => String)
  @Column()
  city: string = '';

  @Field(() => String)
  @Column()
  country: string = '';

  @Field(() => String)
  @Column()
  gender: string = '';

  @ManyToMany(
    () => UserGroup,
    userGroup => userGroup.members,
    { eager: false }
  )
  userGroups?: UserGroup[];

  @Field(() => Profile, {
    nullable: true,
    description: 'The profile for this User',
  })
  @OneToOne(() => Profile, { eager: true, cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  profile?: Profile;

  @Field(() => Agent, {
    nullable: true,
    description: 'The agent for this User',
  })
  @OneToOne(() => Agent, { eager: false, cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  agent?: Agent;

  @OneToMany(
    () => Application,
    application => application.id,
    { eager: false, cascade: false }
  )
  applications?: Application[];

  constructor(name: string) {
    super();
    this.name = name;
  }
}
