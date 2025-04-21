import { dbContext } from "../db/DbContext.js"

class TasksService {
  async getTaskById(taskId) {
    const task = await dbContext.Tasks.findById(taskId).populate('creator', 'name picture')
    return task
  }
  async getAllTasks() {
    const tasks = await dbContext.Tasks.find().populate('creator', 'name picture').sort('-createdAt')
    return tasks
  }
  async createTaskListing(taskData) {
    const task = await dbContext.Tasks.create(taskData)
    await task.populate('creator', 'name picture')
    return task
  }

}

export const tasksService = new TasksService()