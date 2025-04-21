import { Schema } from "mongoose";

export const ToolSchema = new Schema({
  creatorId: { type: Schema.ObjectId, required: true },
  title: { type: String, maxLength: 100, required: true },
  description: { type: String, maxLength: 2000, required: true },
  category: { type: String, enum: ['Tools', 'Automotive', 'Items', 'Camping', 'Kitchen', 'Speciality'], required: true },
  location: { type: String, maxLength: 100, required: true },
  condition: { type: String, maxLength: 100, required: true },
  img: { type: String, maxLength: 3000 },
  fee: { type: String }
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