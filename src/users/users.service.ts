import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { Model } from 'mongoose';
import { user1, user2, user3 } from './dto/mock-create-user';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  async createTest(): Promise<string> {
    const newUser1 = new this.userModel(user1);
    const newUser2 = new this.userModel(user2);
    const newUser3 = new this.userModel(user3);
    newUser1.save();
    newUser2.save();
    newUser3.save();
    return 'test users are created';
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async findOneByEmail(login: string): Promise<User | undefined> {
    const users = await this.userModel.find();
    return users.find((user) => user.email === login);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id);
  }

  async removeAll(): Promise<string> {
    const users = await this.userModel.find();

    users.map(async (user) => {
      console.log(user);
      await this.userModel.findByIdAndDelete(user._id.toString());
    });
    return 'Database is clean';
  }
}
