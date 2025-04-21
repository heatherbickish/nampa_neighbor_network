import { dbContext } from "../db/DbContext.js"

class ToolsService {
  async getToolById(toolId) {
    const tool = await dbContext.Tools.findById(toolId).populate('creator', 'name picture')
    return tool
  }
  async getAllTools() {
    const tools = await dbContext.Tools.find().populate('creator', 'name picture')
    return tools
  }
  async createToolListing(toolData) {
    const tool = await dbContext.Tools.create(toolData)
    await tool.populate('creator', 'name picture')
    return tool
  }

}

export const toolsService = new ToolsService()