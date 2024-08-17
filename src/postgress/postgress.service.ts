import { Injectable } from '@nestjs/common';
import { CreatePostgressDto } from './dto/create-postgress.dto';
import { UpdatePostgressDto } from './dto/update-postgress.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Postgress } from './entities/postgress.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostgressService {
  constructor(
    @InjectRepository(Postgress)
    private postgressRepository: Repository<Postgress>,
  ) {}

  create(createPostgressDto: CreatePostgressDto) {
    return 'This action adds a new postgress';
  }

  // findAll() {
  //   return `This action returns all postgress`;
  // }

  async findAll(): Promise<Postgress[]> {
    return this.postgressRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} postgress`;
  }

  update(id: number, updatePostgressDto: UpdatePostgressDto) {
    return `This action updates a #${id} postgress`;
  }

  remove(id: number) {
    return `This action removes a #${id} postgress`;
  }
}
