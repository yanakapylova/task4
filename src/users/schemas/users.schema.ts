import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty({
    description: "the user's login",
    example: "Yana2610"
  })
  @Prop()
  login: String;

  @ApiProperty({
    description: "the user's login",
    example: "qwerty"
  })
  @Prop()
  password: String;
}

export const UsersSchema = SchemaFactory.createForClass(User);
