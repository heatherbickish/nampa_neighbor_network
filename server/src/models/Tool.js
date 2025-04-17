import { Schema } from "mongoose";

export const ToolSchema = new Schema({
  creatorId: { type: Schema.ObjectId, required: true },
  title: { type: String, maxLength: 100, required: true },
  description: { type: String, maxLength: 2000, required: true },
  catatgory: { type: String, enum: ['tool', 'task', 'item'], required: true },
  location: { type: String, maxLength: 100, required: true },
  condition: { type: String, maxLength: 50, required: true },
  fee: { type: Number }
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  })

ToolSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})