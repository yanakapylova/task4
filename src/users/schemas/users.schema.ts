import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CatDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    login: String

    @Prop()
    password: String
}

export const UsersSchema = SchemaFactory.createForClass(User)