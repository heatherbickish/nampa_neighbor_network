import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Task } from "@/models/Task.js"

class TasksService {
  async getAllTasks() {
    const response = await api.get('api/tasks')
    AppState.tasks = response.data.map(task => new Task(task))
  }

}

export const tasksService = new TasksService()