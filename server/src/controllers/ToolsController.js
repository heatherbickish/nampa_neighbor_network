import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { toolsService } from "../services/ToolsService.js";

export class ToolsController extends BaseController {
  constructor() {
    super('api/tools')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createToolListing)
  }


  async createToolListing(request, response, next) {
    try {
      const toolData = request.body
      toolData.creatorId = request.userInfo.id
      const tool = toolsService.createToolListing(toolData)
      response.send(tool)
    } catch (error) {
      next(error)
    }
  }

}