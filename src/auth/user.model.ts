import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'users', timestamps: true })
export class User {
  @Prop({ type: String })
  name: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop({ type: String })
  password: string;
}

export const UserModel = SchemaFactory.createForClass(User);
