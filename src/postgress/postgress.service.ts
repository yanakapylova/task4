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

  async create(createPostgressDto: CreatePostgressDto): Promise<Postgress> {
    const newPostgress = new Postgress
    newPostgress.name = createPostgressDto.name;
    newPostgress.isActive = createPostgressDto.isActive;
    return this.postgressRepository.save(newPostgress)
  }

  async findAll(): Promise<Postgress[]> {
    return this.postgressRepository.find();
  }

  async findOne(id: number): Promise<Postgress> {
    return this.postgressRepository.findOneBy({
      id: id,
    });
  }s

  update(id: number, updatePostgressDto: UpdatePostgressDto) {
    return this.postgressRepository.update(id, updatePostgressDto);
  }

  remove(id: number) {
    return this.postgressRepository.delete(id);
  }
}
