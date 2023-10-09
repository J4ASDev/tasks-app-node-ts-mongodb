import { Task } from './tasks';

export interface TasksRepository {
  createTask(task: Task): Promise<Task>
  getAllTask(): Promise<Task[]>
  getOneTask(id: string): Promise<Task>
  deleteTask(id: string): Promise<Task>
  markAsCompleted(id: string): void
  updateTask (id: string, task: Task): Promise<string>
}
