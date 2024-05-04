import { UserDocument } from "src/models/user.model";


export interface UserRepository {
  getUser(id: string): Promise<UserDocument>;
}
