import { dbContext } from "../db/DbContext.js"

class TasksService {
  async createTaskListing(taskData) {
    const task = await dbContext.Tasks.create(taskData)
    await task.populate('creator', 'name picture')
    return task
  }

}

export const tasksService = new TasksService()