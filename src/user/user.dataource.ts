
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserRepository } from './user.repository';
import { User, UserDocument } from 'src/models/user.model';

@Injectable()
export class UserDatasource implements UserRepository {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  async getUser(id: string) {
    return await this.userModel.findById(id).select('-password -__v');
  }
}
