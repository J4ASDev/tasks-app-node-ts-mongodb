import { User } from '../domain/users';
import { UsersRepository } from '../domain/users.repository';

export class UpdateUserUseCase {
  private userRepository: UsersRepository;

  constructor(userRepository: UsersRepository) {
    this.userRepository = userRepository;
  }

  execute = async (id: string, user: User) => {
    try {
      return await this.userRepository.updateUser(id, user);
    } catch (error) {
      console.log(error)
    }
  }
}
