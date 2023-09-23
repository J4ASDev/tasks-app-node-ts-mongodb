import { ObjectId } from 'mongoose';
import { User } from './users';

export interface UsersRepository {
  getAllUsers(): Promise<User[]>
  createUser(user: User): Promise<User>
  deleteUser(id: string): Promise<ObjectId>
  // getUserById(id: ObjectId): Promise<User>
  // updateUser(id: ObjectId, user: User): ObjectId
}
