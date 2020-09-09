import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";
import { Track } from "./Track";

@ObjectType()
@Entity({ name: "setups" })
export class Setup extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  suspension: number;

  @Field()
  @Column()
  gear: number;

  @Field()
  @Column()
  differential: number;

  @Field()
  @Column()
  brake: number;

  @ManyToOne(() => User, (user) => user.setups, { nullable: false })
  user: User;
}
