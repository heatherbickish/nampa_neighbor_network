import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { tasksService } from "../services/TasksService.js";

export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
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

}