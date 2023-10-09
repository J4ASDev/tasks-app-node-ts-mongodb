import { TasksRepository } from '../domain/tasks.repository';

export class GetAllTasksUseCase {
  private taskRepository: TasksRepository;

  constructor (repository: TasksRepository) {
    this.taskRepository = repository;
  }

  execute = async () => {
    return await this.taskRepository.getAllTask();
  }
}