import { Task } from '../domain/tasks';
import { TasksRepository } from '../domain/tasks.repository';

export class GetOneTaskUseCase {
  private tasksRepository: TasksRepository;

  constructor (repository: TasksRepository) {
    this.tasksRepository = repository;
  }

  execute = async (id: string): Promise<Task> => {
    return await this.tasksRepository.getOneTask(id)
  }
}
