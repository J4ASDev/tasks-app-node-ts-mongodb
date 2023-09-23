import { model } from 'mongoose'
import UserSchema from '../domain/users.schema'

export class UsersDatabase {
  constructor() {
    return model('User', UserSchema)
  }
}
