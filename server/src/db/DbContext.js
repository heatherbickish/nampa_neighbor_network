import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ToolSchema } from "../models/Tool.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Tools = mongoose.model('Tool', ToolSchema);
}

export const dbContext = new DbContext()
