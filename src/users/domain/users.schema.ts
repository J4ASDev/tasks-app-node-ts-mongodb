import { Schema } from 'mongoose'
import { User } from './users'

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate: (value: string) => {
      if (value.toLowerCase().includes('password')) throw new Error('Password cannot contain "password"')
    }
  }
})

export default UserSchema
