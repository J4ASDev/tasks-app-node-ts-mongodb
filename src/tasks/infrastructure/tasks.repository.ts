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

  async getAllTask(): Promise<Task[]> {
    return await this.repository.find();
  }

  async getOneTask(id: string): Promise<Task> {
    return await this.repository.findOne({ _id: id })
  }
  
  async deleteTask(id: string): Promise<Task> {
    return await this.repository.findByIdAndDelete(id);
  }

  async markAsCompleted(id: string): Promise<string> {
    await this.repository.updateOne({ _id: id }, { completed: true });

    return id
  }

  async updateTask(id: string, task: Task): Promise<string> {
    return await this.repository.findOneAndUpdate({ _id: id }, task)
  }
}
