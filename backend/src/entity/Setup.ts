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
  power: string;

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

  @Field({ nullable: true })
  @Column({ nullable: true })
  note: string;

  @ManyToOne(() => User, (user) => user.setups, {
    nullable: false,
  })
  user: User;

  @Field(() => Track)
  @ManyToOne(() => Track, { nullable: false, eager: true })
  track: Track;

  @Field(() => Vehicle)
  @ManyToOne(() => Vehicle, { nullable: false, eager: true })
  vehicle: Vehicle;
}
