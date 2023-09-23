import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes';

import { CreateUserUseCase } from '../application/create-user.usecase';
import { UsersRepository } from '../domain/users.repository';
import { GetAllUsersUseCase } from '../application/get-all-users.usecase';
import { DeleteUserUseCase } from '../application/delete-user.usecase';

export class UsersController {
  private createUserUseCase: CreateUserUseCase;
  private getAllUsersUseCase: GetAllUsersUseCase;
  private deleteUserUseCase: DeleteUserUseCase;

  constructor (userRepository: UsersRepository) {
    this.createUserUseCase = new CreateUserUseCase(userRepository)
    this.getAllUsersUseCase = new GetAllUsersUseCase(userRepository)
    this.deleteUserUseCase = new DeleteUserUseCase(userRepository)
  }
    
  getAllUsers = async (_: Request, response: Response) => {
    const users = await this.getAllUsersUseCase.execute()

    if (users?.length === 0) {
      response
        .status(StatusCodes.NOT_FOUND)
        .send({ message: 'Not users found.'})

      return
    }

    response
      .status(StatusCodes.OK)
      .send({ data: users })
  }

  createUser = async (request: Request, response: Response) => {
    const { name, email, password, age } = request?.body || {}

    if (name?.length < 1) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: '"Name" field missing' })
      
      return
    }

    const user = await this.createUserUseCase.execute(name, email, password, age)

    response
      .status(StatusCodes.CREATED)
      .json({ data: user })
  }

  deleteUser = async (request: Request, response: Response) => {
    const id: string = request?.params?.id

    if (!id) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: 'Field "id" is missing' })

      return
    }

    const userId = await this.deleteUserUseCase.execute(id)

    response
      .status(StatusCodes.ACCEPTED)
      .send({ data: userId })
  }
}