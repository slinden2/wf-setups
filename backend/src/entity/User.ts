import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Setup } from "./Setup";

@ObjectType()
@Entity({ name: "users" })
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text", { unique: true })
  discordId: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  discriminator: string;

  @Field()
  @Column()
  avatar: string;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @OneToMany(() => Setup, (setup) => setup.user)
  setups: Setup[];
}
