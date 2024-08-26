import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostgressDto } from './dto/create-postgress.dto';
import { UpdatePostgressDto } from './dto/update-postgress.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Postgress } from './entities/postgress.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PostgressService {
  constructor(
    @InjectRepository(Postgress)
    private postgressRepository: Repository<Postgress>,
  ) {}

  async create(createPostgressDto: CreatePostgressDto): Promise<Postgress> {
    const newPostgress = new Postgress();
    newPostgress.name = createPostgressDto.name;
    newPostgress.isActive = createPostgressDto.isActive;
    return this.postgressRepository.save(newPostgress);
  }

  async findAll(): Promise<Postgress[]> {
    return this.postgressRepository.find();
  }

  async findOne(id: number): Promise<Postgress> {
    const result = await this.postgressRepository.findOneBy({ id });
    if (!result) {
      throw new HttpException(`Пользователь с ID ${id} не найден`, 400)
    }
    return result;
  }

  async update(
    id: number,
    updatePostgressDto: UpdatePostgressDto,
  ): Promise<void> {
    if (!id) {
      throw new HttpException('Invalid Info', 400);
    }
    const result = await this.postgressRepository.update(
      id,
      updatePostgressDto,
    );
    if (result.affected === 0) {
      throw new HttpException(`Пользователь с ID ${id} не найден`, 400);
    }
  }

  async remove(id: number): Promise<void> {
    if (!id) {
      throw new HttpException('Invalid Info', 400);
    }
    const result: DeleteResult = await this.postgressRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Пользователь с ID ${id} не найден`, 400);
    }
  }
}
