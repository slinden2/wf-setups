import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";
import { Track } from "./Track";
import { Vehicle } from "./Vehicle";

@ObjectType()
@Entity({ name: "setups" })
export class Setup extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: Date;

  @CreateDateColumn()
  updatedDate: Date;

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

  @ManyToOne(() => Track, { nullable: false })
  track: Track;

  @ManyToOne(() => Vehicle, { nullable: false })
  vehicle: Vehicle;
}
