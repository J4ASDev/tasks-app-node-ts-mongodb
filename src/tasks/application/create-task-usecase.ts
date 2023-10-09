import { Task } from '../domain/tasks';
import { TasksRepository } from '../domain/tasks.repository';

export class CreateTaskUseCase {
  private taskRepository: TasksRepository;

  constructor(repository: TasksRepository) {
    this.taskRepository = repository;
  }

  execute = async (
    title: string,
    description: string,
    duration: number | undefined,
    assigned: string
  ): Promise<Partial<Task>> => {
    const newTask = new Task(title, description, duration, false, assigned);

    const createdTask =  await this.taskRepository.createTask(newTask);
    
    return createdTask
  }
}