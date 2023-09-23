import { User } from '../domain/users';
import { UsersRepository } from '../domain/users.repository';

export class CreateUserUseCase {
  private userRepository: UsersRepository;

  constructor (repository: UsersRepository) {
    this.userRepository = repository
  }

  execute = async (
    name: string,
    email: string,
    password: string,
    age: number,
  ): Promise<Partial<User>> => {
    const newUser = new User(name, email, password, age)

    const createdUser = await this.userRepository.createUser(newUser)

    return createdUser
  }
}
