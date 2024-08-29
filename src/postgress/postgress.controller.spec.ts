import { Test, TestingModule } from '@nestjs/testing';
import { PostgressController } from './postgress.controller';
import { PostgressService } from './postgress.service';

describe('PostgressController', () => {
  let controller: PostgressController;

  const postgressServiceMock = {
    create: jest.fn((dto) => {
      return {
        id: 1,
        ...dto,
      };
    }),
    findAll: jest.fn(() => {
      return ['test'];
    }),
    update: jest.fn((id, dto) => {
      return {
        id: id,
        ...dto,
      };
    }),
    findOne: jest.fn((id) => {
      return {
        id: id,
        name: 'yana',
        isActive: true,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostgressController],
      providers: [PostgressService],
    })
      .overrideProvider(PostgressService)
      .useValue(postgressServiceMock)
      .compile();

    controller = module.get<PostgressController>(PostgressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  const dto = { name: 'yana', isActive: true };

  it('should create a user', () => {
    expect(controller.create(dto)).toEqual({
      id: expect.any(Number),
      name: 'yana',
      isActive: true,
    });
  });

  it('should update a user', () => {
    expect(controller.update('qwsqw', dto)).toEqual({
      id: expect.any(Number),
      name: 'yana',
      isActive: true,
    });
  });

  it('should return a user by id', () => {
    expect(controller.findOne("1")).toEqual({
      id:  expect.any(Number),
      name: expect.any(String),
      isActive: expect.any(Boolean),
    });
  });

  it('should return array of users', () => {
    expect(controller.findAll()).toEqual(['test']);
  });
});
