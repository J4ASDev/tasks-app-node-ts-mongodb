import { Task } from '../domain/tasks';
import { TasksRepository } from '../domain/tasks.repository';

export class UpdateTaskUseCase {
  private tasksRepository: TasksRepository;

  constructor (repository: TasksRepository) {
    this.tasksRepository = repository;
  }

  execute = async (id: string, task: Task) => {
    return await this.tasksRepository.updateTask(id, task)
  }
}
