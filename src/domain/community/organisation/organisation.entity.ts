import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { IGroupable } from '@src/common/interfaces/groupable.interface';
import { DID } from '@domain/agent/did/did.entity';
import { Ecoverse } from '@domain/challenge/ecoverse/ecoverse.entity';
import { Profile } from '@domain/community/profile/profile.entity';
import { UserGroup } from '@domain/community/user-group/user-group.entity';
import { IOrganisation } from './organisation.interface';
import { Challenge } from '@domain/challenge';
import { AuthorizationRoles } from '@core/authorization';

@Entity()
@ObjectType()
export class Organisation extends BaseEntity
  implements IOrganisation, IGroupable {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  updatedDate?: Date;

  @VersionColumn()
  version?: number;

  @Field(() => String, { nullable: false, description: '' })
  @Column()
  name: string;

  @OneToOne(() => DID)
  @JoinColumn()
  DID!: DID;

  @Field(() => String, {
    nullable: false,
    description: 'A short text identifier for this Organisation',
  })
  @Column()
  textID: string;

  @OneToOne(
    () => Ecoverse,
    ecoverse => ecoverse.host
  )
  hostedEcoverse?: Ecoverse;

  @OneToOne(() => Profile, { eager: true, cascade: true })
  @JoinColumn()
  profile?: Profile;

  @OneToMany(
    () => UserGroup,
    userGroup => userGroup.organisation,
    { eager: false, cascade: true }
  )
  groups?: UserGroup[];

  @ManyToMany(
    () => Challenge,
    challenge => challenge.leadOrganisations,
    { eager: false, cascade: false }
  )
  challenges!: Challenge[];

  // The restricted group names at the challenge level
  restrictedGroupNames?: string[];

  constructor(textID: string) {
    super();
    this.name = '';
    this.textID = textID;
    this.restrictedGroupNames = [AuthorizationRoles.Members];
  }
}
