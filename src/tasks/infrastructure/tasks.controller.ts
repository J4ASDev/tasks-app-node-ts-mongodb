import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { TasksRepository } from '../domain/tasks.repository';
import { CreateTaskUseCase } from '../application/create-task-usecase';
import { GetAllTasksUseCase } from '../application/get-all-tasks-usecase';
import { GetOneTaskUseCase } from '../application/get-one-tasks-usecase';
import { DeleteTaskUseCase } from '../application/delete-task-usecase';
import { MarkAsCompletedUseCase } from '../application/mark-as-completed-usecase';
import { UpdateTaskUseCase } from '../application/update-task-usecase';

export class TasksController {
  private createTaskUseCase: CreateTaskUseCase;
  private getAllTasksUseCase: GetAllTasksUseCase;
  private getOneTaskUseCase: GetOneTaskUseCase;
  private deleteTaskUseCase: DeleteTaskUseCase;
  private markAsCompletedUseCase: MarkAsCompletedUseCase;
  private updateTaskUseCase: UpdateTaskUseCase;

  constructor (taskRepository: TasksRepository){
    this.createTaskUseCase = new CreateTaskUseCase(taskRepository);
    this.getAllTasksUseCase = new GetAllTasksUseCase(taskRepository);
    this.getOneTaskUseCase = new GetOneTaskUseCase(taskRepository);
    this.deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
    this.markAsCompletedUseCase = new MarkAsCompletedUseCase(taskRepository);
    this.updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
  }

  createTask = async (request: Request, response: Response) => {
    const { title, description, duration, assigned } = request?.body;

    const data = await this.createTaskUseCase.execute(title, description, duration, assigned);

    response
      .status(StatusCodes.OK)
      .json({ data })
  }

  getAllTasks = async (_: Request, response: Response) => {
    const data = await this.getAllTasksUseCase.execute();

    response.status(StatusCodes.OK).json({ data });
  }

  getOneTask = async (request: Request, response: Response) => {
    const id = request.params?.id;

    if (!id) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Id is missing' })

      return
    }

    const data = await this.getOneTaskUseCase.execute(id)

    response
      .status(StatusCodes.OK)
      .json({ data })
  }

  deleteTask = async (request: Request, response: Response) => {
    const id = request.params?.id;

    if (!id) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Id is missing' })

      return
    }

    const data = await this.deleteTaskUseCase.execute(id)

    response.status(StatusCodes.OK).json({ data })
  }

  markAsCompleted = async (request: Request, response: Response) => {
    const id = request.params?.id;

    if (!id) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Id is missing' })

      return
    }

    this.markAsCompletedUseCase.execute(id)

    response.status(StatusCodes.OK).json({ id })
  }

  updateTask = async (request: Request, response: Response) => {
    const id = request.params?.id;
    const body = request.body;

    const data = await this.updateTaskUseCase.execute(id, body);

    response.status(StatusCodes.OK).json({ data });
  }
}
