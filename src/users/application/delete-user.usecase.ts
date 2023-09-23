import { UsersRepository } from '../domain/users.repository';

export class DeleteUserUseCase {
  private repository: UsersRepository;

  constructor (userRepository: UsersRepository) {
    this.repository = userRepository
  }

  async execute (id: string) {
    return await this.repository.deleteUser(id)
  }
}
