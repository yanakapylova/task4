import { Module } from '@nestjs/common';
import { PostgressService } from './postgress.service';
import { PostgressController } from './postgress.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postgress } from './entities/postgress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Postgress])],
  controllers: [PostgressController],
  providers: [PostgressService],
})
export class PostgressModule {}
