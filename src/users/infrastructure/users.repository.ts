import { User } from '../domain/users';
import { UsersDatabase } from './users.database';
import { UsersRepository } from '../domain/users.repository';

export class UsersRepositoryAdapter implements UsersRepository {
  private repository: any; // Fix that any

  constructor (db: UsersDatabase) {
    this.repository = db
  }

  async getAllUsers() {
    return await this.repository.find();
  }

  async createUser (user: User) {
    return await this.repository(user).save();
  }

  async deleteUser (id: string) {
    return await this.repository.findByIdAndDelete(id)
  }

  async getUserById(id: string): Promise<User> {
    return await this.repository.find({ _id: id })
  }

  async updateUser(id: string, user: User): Promise<User> {
    try {
      return await this.repository.updateOne({ _id: id }, user);
    } catch (e) {
      if (e instanceof Error) throw new Error(e.name);

      throw new Error('Internal server error');
    }
  }
}
