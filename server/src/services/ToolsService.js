import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class ToolsService {
  async deleteTool(toolId, userId) {
    const tool = await dbContext.Tools.findById(toolId)

    if (tool == null) throw new Error(`Invalid tool id: ${toolId}`)
    if (tool.creatorId != userId) throw new Forbidden("YOU CANT DELETE THAT ITS NOT YOURS HOMIE")

    await tool.deleteOne()
    return 'Tool listing has been deleted!'
  }
  async editTool(toolId, userId, updateData) {
    const originalTool = await dbContext.Tools.findById(toolId)

    if (!originalTool) throw new Error(`Invalid tool id: ${toolId}`)
    if (userId != updateData.creatorId) throw new Forbidden("CANT DO THAT ITS NOT YOURS HUN")

    originalTool.title ??= updateData.title
    originalTool.description ??= updateData.description
    originalTool.category ??= updateData.category
    originalTool.location ??= updateData.location
    originalTool.condition ??= updateData.condition
    originalTool.img ??= updateData.img
    originalTool.fee ??= updateData.fee

    await originalTool.save()
    return originalTool
  }
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