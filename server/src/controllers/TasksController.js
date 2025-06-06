import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { tasksService } from "../services/TasksService.js";

export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      .get('/:taskId', this.getTaskById)
      .get('', this.getAllTasks)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTaskListing)
      .put('/:taskId', this.editTask)
      .delete('/:taskId', this.deleteTask)
  }

  async createTaskListing(request, response, next) {
    try {
      const taskData = request.body
      taskData.creatorId = request.userInfo.id
      const task = await tasksService.createTaskListing(taskData)
      response.send(task)
    } catch (error) {
      next(error)
    }
  }

  async getAllTasks(request, response, next) {
    try {
      const tasks = await tasksService.getAllTasks()
      response.send(tasks)
    } catch (error) {
      next(error)
    }
  }

  async getTaskById(request, response, next) {
    try {
      const taskId = request.params.taskId
      const task = await tasksService.getTaskById(taskId)
      response.send(task)
    } catch (error) {
      next(error)
    }
  }

  async editTask(request, response, next) {
    try {
      const taskId = request.params.taskId
      const updateData = request.body
      const userId = request.userInfo.id
      const updatedTask = await tasksService.editTask(taskId, userId, updateData)
      response.send(updatedTask)
    } catch (error) {
      next(error)
    }
  }

  async deleteTask(request, response, next) {
    try {
      const taskId = request.params.taskId
      const userId = request.userInfo.id
      const message = await tasksService.deleteTask(taskId, userId)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }

}