import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getUser(@Req() req: any): Promise<any> {
    const userId = req.user.id
    const token = req.headers.authorization.split(' ')[1];
    const user =  await this.userService.getUser(userId);
    return { user, token };
  }
}
