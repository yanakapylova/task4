import { PartialType } from '@nestjs/mapped-types';
import { CreatePostgressDto } from './create-postgress.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostgressDto extends PartialType(CreatePostgressDto) {
  @ApiProperty({
    description: "user's name",
    example: 'Yana',
  })
  name: string;

  @ApiProperty({
    description: "user's account status",
    example: true,
  })
  isActive: boolean;
}
