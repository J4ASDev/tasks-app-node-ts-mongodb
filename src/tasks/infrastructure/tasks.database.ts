import { model } from 'mongoose';
import TaskSchema from '../domain/tasks.schema';

export class TasksDatabase {
  constructor() {
    return model('Tasks', TaskSchema);
  }
}
