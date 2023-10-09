import { Task } from './tasks';

export interface TasksRepository {
  createTask(task: Task): Promise<Task>
}
