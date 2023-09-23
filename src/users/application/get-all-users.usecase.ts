import { UsersRepository } from '../domain/users.repository';

export class GetAllUsersUseCase {
  private userRepository: UsersRepository

  constructor (userRepository: UsersRepository) {
    this.userRepository = userRepository
  }

  async execute () {
    return await this.userRepository.getAllUsers()
  }
}
