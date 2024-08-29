import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostgressService } from './postgress.service';
import { CreatePostgressDto } from './dto/create-postgress.dto';
import { UpdatePostgressDto } from './dto/update-postgress.dto';
import { Postgress } from './entities/postgress.entity';
import { ApiOperation } from '@nestjs/swagger';

@Controller('postgress')
export class PostgressController {
  constructor(private readonly postgressService: PostgressService) {}

  @ApiOperation({description: "create a new user"})
  @Post()
  create(@Body() createPostgressDto: CreatePostgressDto) {
    return this.postgressService.create(createPostgressDto);
  }

  @ApiOperation({description: "get an array of all users"})
  @Get()
  findAll(): Promise<Postgress[]> {
    return this.postgressService.findAll();
  }

  @ApiOperation({description: "get a user by id"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postgressService.findOne(+id);
  }

  @ApiOperation({description: "update a user by id"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostgressDto: UpdatePostgressDto) {
    return this.postgressService.update(+id, updatePostgressDto);
  }

  @ApiOperation({description: "delete a user by id"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postgressService.remove(+id);
  }
}
