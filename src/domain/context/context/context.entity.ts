import { ObjectType } from '@nestjs/graphql';
import { Reference } from '@domain/common/reference/reference.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { IContext } from './context.interface';

@Entity()
@ObjectType({
  implements: () => [IContext],
})
export class Context extends BaseEntity implements IContext {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  updatedDate?: Date;

  @VersionColumn()
  version?: number;

  @Column('varchar', { length: 255, nullable: true })
  tagline?: string = '';

  @Column('text', { nullable: true })
  background?: string = '';

  @Column('text', { nullable: true })
  vision?: string = '';

  @Column('text', { nullable: true })
  impact?: string = '';

  @Column('text', { nullable: true })
  who?: string = '';

  @OneToMany(
    () => Reference,
    reference => reference.context,
    { eager: true, cascade: true }
  )
  references?: Reference[];

  // Constructor
  constructor() {
    super();
  }
}
