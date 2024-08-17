import { Test, TestingModule } from '@nestjs/testing';
import { PostgressController } from './postgress.controller';
import { PostgressService } from './postgress.service';

describe('PostgressController', () => {
  let controller: PostgressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostgressController],
      providers: [PostgressService],
    }).compile();

    controller = module.get<PostgressController>(PostgressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
