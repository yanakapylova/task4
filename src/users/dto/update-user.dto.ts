import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        description: "user's login",
        example: "Yana2610"
    })
    login: string

    @ApiProperty({
        description: "user's password",
        example: "qwerty"
    })
    password: string
}
