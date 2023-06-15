import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  describe("findAll", () => {
    it('should return an array of users', async () => {
      const result = ['test'];
      const result2 = 'test';
      jest.spyOn(service, 'findAll').mockImplementation(() => result)
      jest.spyOn(service, 'create').mockImplementation(() => result2);

      expect(controller.findAll()).toBe(result);
      expect(controller.create('something')).toBe(result2);
    });
  })

  describe('create', () => {
    it('should create a new user', async () => {
      const result2 = 'test';
      jest.spyOn(service, 'create').mockImplementation(() => result2);

      expect(controller.create('something')).toBe(result2);
    });
  })
});
