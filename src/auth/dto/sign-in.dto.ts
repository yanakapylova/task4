import { ApiProperty } from '@nestjs/swagger';

export class SignInUserDto {
  @ApiProperty({
    description: "user's login",
    example: 'Yana2610',
  })
  login: string;

  @ApiProperty({
    description: "user's password",
    example: 'qwerty',
  })
  password: string;
}
