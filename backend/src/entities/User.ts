import { PrimaryKey, Property, Entity } from "@mikro-orm/core";
import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
@Entity()
export class User {

	@Field(() => Int)
	@PrimaryKey()
	id!: number;

	@Field(() => String)
	@Property({ type: 'date' })
	createdAt = new Date();

	@Field(() => String)
	@Property({ type: 'date', onUpdate: () => new Date() })
	updatedAt = new Date();

	@Field()
	@Property({ type: "text", unique: true })
	username!: string;

	@Field()
	@Property({ type: "text" })
	password!: string;

}