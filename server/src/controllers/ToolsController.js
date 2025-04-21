import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { toolsService } from "../services/ToolsService.js";

export class ToolsController extends BaseController {
  constructor() {
    super('api/tools')
    this.router
      .get('/:toolId', this.getToolById)
      .get('', this.getAllTools)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createToolListing)
      .put('/:toolId', this.editTool)
  }


  async createToolListing(request, response, next) {
    try {
      const toolData = request.body
      toolData.creatorId = request.userInfo.id
      const tool = await toolsService.createToolListing(toolData)
      response.send(tool)
    } catch (error) {
      next(error)
    }
  }

  async getAllTools(request, response, next) {
    try {
      const tools = await toolsService.getAllTools()
      response.send(tools)
    } catch (error) {
      next(error)
    }
  }

  async getToolById(request, response, next) {
    try {
      const toolId = request.params.toolId
      const tool = await toolsService.getToolById(toolId)
      response.send(tool)
    } catch (error) {
      next(error)
    }
  }

  async editTool(request, response, next) {
    try {
      const toolId = request.params.toolId
      const updateData = request.body
      const userId = request.userInfo.id
      const updatedTool = await toolsService.editTool(toolId, userId, updateData)
      response.send(updatedTool)
    } catch (error) {
      next(error)
    }
  }

}