import { Router } from 'express';
import { TasksController } from './infrastructure/tasks.controller';
import { TasksRepositoryAdapter } from './infrastructure/tasks.repository';
import { TasksDatabase } from './infrastructure/tasks.database';

const router = Router();
const db = new TasksDatabase();
const repository = new TasksRepositoryAdapter(db);
const controller = new TasksController(repository);

router.route('/tasks')
  .get(controller.getAllTasks)
  .post(controller.createTask)

router.route('/tasks/:id')
  .get(controller.getOneTask)
  .delete(controller.deleteTask)
  .patch(controller.markAsCompleted)
  .put(controller.updateTask)

export default router
