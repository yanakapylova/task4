import { PartialType } from '@nestjs/mapped-types';
import { CreatePostgressDto } from './create-postgress.dto';

export class UpdatePostgressDto extends PartialType(CreatePostgressDto) {}
