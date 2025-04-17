import { dbContext } from "../db/DbContext.js"

class ToolsService {
  async createToolListing(toolData) {
    const tool = await dbContext.Tools.create(toolData)
    await tool.populate('creator', 'name picture')
    return tool
  }

}

export const toolsService = new ToolsService()