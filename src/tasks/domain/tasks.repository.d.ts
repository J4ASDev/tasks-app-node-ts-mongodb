import { Task } from './tasks';

export interface TasksRepository {
  createTask(task: Task): Promise<Task>
  getAllTask(): Promise<Task[]>
  getOneTask(id: string): Promise<Task>
}
