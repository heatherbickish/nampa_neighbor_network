import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ToolSchema } from "../models/Tool.js";
import { TaskSchema } from "../models/Task.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Tools = mongoose.model('Tool', ToolSchema);
  Tasks = mongoose.model('Task', TaskSchema);
}

export const dbContext = new DbContext()
