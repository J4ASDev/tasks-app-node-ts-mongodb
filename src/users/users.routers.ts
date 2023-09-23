import { Router } from 'express'
import { UsersController } from './infrastructure/users.controller'
import { UsersRepositoryAdapter } from './infrastructure/users.repository'
import { UsersDatabase } from './infrastructure/users.database'

const router = Router()
const db = new UsersDatabase()
const repository = new UsersRepositoryAdapter(db)
const controller = new UsersController(repository)

router.route('/users')
  .get(controller.getAllUsers)
  .post(controller.createUser)

router.route('/users/:id')
  .delete(controller.deleteUser)


export default router 
