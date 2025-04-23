import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class TasksService {
  async deleteTask(taskId, userId) {
    const task = await dbContext.Tasks.findById(taskId)

    if (task == null) throw new Error(`Invalid task id: ${taskId}`)
    if (task.creatorId != userId) throw new Forbidden("UH UH UH, YOU DIDNT SAY THAT MAGIC WORD")

    await task.deleteOne()
    return 'Task was deleted!!!'
  }
  async editTask(taskId, userId, updateData) {
    const originalTask = await dbContext.Tasks.findById(taskId)

    if (!originalTask) throw new Error(`Invalid task id: ${taskId}`)
    if (userId != updateData.creatorId) throw new Forbidden("TAINT YOURS DARLING CANT TO THAT")

    originalTask.title ??= updateData.title
    originalTask.description ??= updateData.description
    originalTask.location ??= updateData.location
    originalTask.category ??= updateData.category
    originalTask.proprosedPrice ??= updateData.proprosedPrice

    await originalTask.save()
    return originalTask
  }
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