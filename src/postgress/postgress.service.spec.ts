import { Test, TestingModule } from '@nestjs/testing';
import { PostgressService } from './postgress.service';

describe('PostgressService', () => {
  let service: PostgressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostgressService],
    }).compile();

    service = module.get<PostgressService>(PostgressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
