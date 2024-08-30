import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty({
    description: "the user's reandonly generated id",
    example: '66b49b8b23fdb2167f34d0f1',
  })
  @Prop()
  id: string;

  @ApiProperty({
    description: "the user's login",
    example: 'Yana2610',
  })
  @Prop()
  login: string;

  @ApiProperty({
    description: "the user's email",
    example: 'Yana2610',
  })
  @Prop()
  email: string;

  @ApiProperty({
    description: "the user's login",
    example: 'qwerty',
  })
  @Prop()
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(User);
