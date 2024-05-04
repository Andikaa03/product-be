import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDatasource } from './user.dataource';
import { User, UserModel } from 'src/models/user.model';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserModel;
          return schema;
        },
      },
    ]),
  ],
  providers: [
    UserService,
    {
      provide: 'UserRepository',
      useClass: UserDatasource,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
