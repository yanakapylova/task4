import { Test, TestingModule } from '@nestjs/testing';
import { PostgressService } from './postgress.service';
import { Postgress } from './entities/postgress.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('PostgressService', () => {
  let service: PostgressService;
  const dto = { name: 'Yana', isActive: true };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostgressService,
        {
          provide: getRepositoryToken(Postgress),
          useValue: {
            create: jest.fn((dto) => {
              return { ...dto, id: 1 };
            }),
            save: jest.fn((user) => Promise.resolve({ id: 1, ...user })),
            update: jest.fn((id, dto) => {
              return { ...dto, id: id };
            }),
            find: jest.fn(() => [dto]),
            findOneBy: jest.fn((obj) => {
              return {
                id: obj.id,
                ...dto
              };
            }),
            delete: jest.fn((id) => {
              return { id: id, ...dto };
            }),
          },
        },
      ],
    }).compile();

    service = module.get<PostgressService>(PostgressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user', async () => {
    const result = await service.create(dto);
    expect(result).toEqual({
      ...dto,
      id: expect.any(Number),
    });
  });

  it('should update a user by id', async () => {
    const result = await service.update(1, dto);
    expect(result).toEqual({
      ...dto,
      id: 1
    });
  });

  it('should return array of users', async () => {
    const result = await service.findAll();
    expect(result).toEqual([dto]);
  });

  it('should return user by id', async () => {
    const result = await service.findOne(1);
    expect(result).toEqual({
      id: 1,
      name: expect.any(String),
      isActive: expect.any(Boolean),
    });
  });

  it('should delete a user by id', async () => {
    const result = await service.remove(1);
    expect(result).toBeUndefined();
  });

});
