import { UsersRepository } from '../domain/users.repository';

export class GetUserByIdUseCase {
  private userRepository: UsersRepository

  constructor (userRepository: UsersRepository) {
    this.userRepository = userRepository
  }

  execute = async (id: string) => {
    return await this.userRepository.getUserById(id)
  }
}