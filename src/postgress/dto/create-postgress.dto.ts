import { ApiProperty } from "@nestjs/swagger";

export class CreatePostgressDto {
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
