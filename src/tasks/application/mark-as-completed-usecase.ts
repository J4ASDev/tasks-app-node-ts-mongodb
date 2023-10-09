import { TasksRepository } from '../domain/tasks.repository';

export class MarkAsCompletedUseCase {
  private tasksRespository: TasksRepository;

  constructor(respository: TasksRepository) {
    this.tasksRespository = respository;
  }

  execute = (id: string) => {
    return this.tasksRespository.markAsCompleted(id);
  }
}
