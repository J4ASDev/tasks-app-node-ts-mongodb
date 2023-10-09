import { Task } from '../domain/tasks';
import { TasksRepository } from '../domain/tasks.repository';
import { TasksDatabase } from './tasks.database';

export class TasksRepositoryAdapter implements TasksRepository {
  private repository: any;

  constructor (db: TasksDatabase) {
    this.repository = db;
  }

  async createTask(task: Task) {
    return await this.repository(task).save();
  }
}