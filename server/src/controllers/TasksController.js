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

}