import { Schema } from 'mongoose'

const TaskSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: Number,
    default: 0
  },
  completed: {
    type: Boolean,
    default: false
  },
  assigned: {
    type: String,
    required: true,
    trim: true,
  }
})

export default TaskSchema
