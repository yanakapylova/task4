import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const userServiceMock = {
    create: jest.fn((dto) => {
      return {
        id: '1',
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
        login: 'yana',
        password: 'qwerty',
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(userServiceMock)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  const dto = { login: 'yana', password: 'qwerty' };

  it('should create a user', () => {
    expect(controller.create(dto)).toEqual({
      id: expect.any(String),
      login: 'yana',
      password: 'qwerty',
    });
  });

  it('should update a user', () => {
    expect(controller.fullUpdate('qwsqw', dto)).toEqual({
      id: expect.any(String),
      login: 'yana',
      password: 'qwerty',
    });
  });

  it('should return a user by id', () => {
    expect(controller.findOne('qwsqw')).toEqual({
      id: 'qwsqw',
      login: expect.any(String),
      password: expect.any(String),
    });
  });

  it('should return array of users', () => {
    expect(controller.findAll()).toEqual(['test']);
  });
});
