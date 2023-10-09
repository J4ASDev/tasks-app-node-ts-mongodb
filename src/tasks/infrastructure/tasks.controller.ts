import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { TasksRepository } from '../domain/tasks.repository';
import { CreateTaskUseCase } from '../application/create-task-usecase';

export class TasksController {
  private createTaskUseCase: CreateTaskUseCase;

  constructor (taskRepository: TasksRepository){
    this.createTaskUseCase = new CreateTaskUseCase(taskRepository);
  }

  createTask = async (request: Request, response: Response) => {
    const { title, description, duration, assigned } = request?.body;

    const data = await this.createTaskUseCase.execute(title, description, duration, assigned);

    response
      .status(StatusCodes.OK)
      .json({ data })
  }
}
