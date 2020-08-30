import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Vehicle extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text", { unique: true })
  vehicleId: string;

  @Field()
  @Column()
  vehicleFolder: string;

  @Field()
  @Column("text", { unique: true })
  name: string;
}
