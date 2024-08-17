import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostgressService } from './postgress.service';
import { CreatePostgressDto } from './dto/create-postgress.dto';
import { UpdatePostgressDto } from './dto/update-postgress.dto';
import { Postgress } from './entities/postgress.entity';

@Controller('postgress')
export class PostgressController {
  constructor(private readonly postgressService: PostgressService) {}

  @Post()
  create(@Body() createPostgressDto: CreatePostgressDto) {
    return this.postgressService.create(createPostgressDto);
  }

  // @Get()
  // findAll() {
  //   return this.postgressService.findAll();
  // }

  @Get()
  findAll(): Promise<Postgress[]> {
    return this.postgressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postgressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostgressDto: UpdatePostgressDto) {
    return this.postgressService.update(+id, updatePostgressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postgressService.remove(+id);
  }
}
