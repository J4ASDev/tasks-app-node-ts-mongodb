import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes';

import { CreateUserUseCase } from '../application/create-user.usecase';
import { UsersRepository } from '../domain/users.repository';
import { GetAllUsersUseCase } from '../application/get-all-users.usecase';
import { DeleteUserUseCase } from '../application/delete-user.usecase';
import { GetUserByIdUseCase } from '../application/get-user-by-id.usecase';
import { UpdateUserUseCase } from '../application/update-user-usecase';

export class UsersController {
  private createUserUseCase: CreateUserUseCase;
  private getAllUsersUseCase: GetAllUsersUseCase;
  private deleteUserUseCase: DeleteUserUseCase;
  private getUserByIdUseCase: GetUserByIdUseCase;
  private updateUserUseCase: UpdateUserUseCase;

  constructor (userRepository: UsersRepository) {
    this.createUserUseCase = new CreateUserUseCase(userRepository);
    this.getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
    this.deleteUserUseCase = new DeleteUserUseCase(userRepository);
    this.getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
    this.updateUserUseCase  = new UpdateUserUseCase(userRepository);
  }
    
  getAllUsers = async (_: Request, response: Response) => {
    const users = await this.getAllUsersUseCase.execute();

    if (users?.length === 0) {
      response
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'Not users found.'});

      return
    }

    response
      .status(StatusCodes.OK)
      .json({ data: users });
  }

  createUser = async (request: Request, response: Response) => {
    const { name, email, password, age } = request?.body || {}

    if (name?.length < 1) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: '"Name" field missing' });
      
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
        .json({ error: 'Param "id" is missing' });

      return
    }

    const userId = await this.deleteUserUseCase.execute(id)

    response
      .status(StatusCodes.ACCEPTED)
      .json({ data: userId });
  }


  getUserById = async (request: Request, response: Response) => {
    const id = request?.params?.id

    if (!id) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: 'Param "id" is missing' });

      return
    }

    const data = await this.getUserByIdUseCase.execute(id)

    response.status(StatusCodes.ACCEPTED).json({ data });
  }

  updateUser = async (request: Request, response: Response) => {
    const id = request.params.id;
    const user = request.body;

    if (Object.keys(user).length === 0) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: 'Empty body is not accepted' });

      return
    }

    const data = await this.updateUserUseCase.execute(id, user);

    response.status(StatusCodes.OK).json({ data });
  }
}