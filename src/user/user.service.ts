import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository') private userRepository: UserRepository,
  ) {}

  async getUser(id: string) {
    const user = await this.userRepository.getUser(id);
    return user
  }
}
