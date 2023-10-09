import { TasksRepository } from '../domain/tasks.repository';

export class DeleteTaskUseCase {
  private taskRepository: TasksRepository;

  constructor(repository: TasksRepository) {
    this.taskRepository = repository;
  }

  execute = async (id: string) => {
    return await this.taskRepository.deleteTask(id);
  }
}
