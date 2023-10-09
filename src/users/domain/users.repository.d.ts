import { User } from './users';

export interface UsersRepository {
  getAllUsers(): Promise<User[]>
  createUser(user: User): Promise<User>
  deleteUser(id: string): Promise<User>
  getUserById(id: string): Promise<User>
  updateUser(id: string, user: User): Promise<User>
}
