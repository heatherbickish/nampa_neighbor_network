import { Schema } from "mongoose";

export const TaskSchema = new Schema({
  creatorId: { type: Schema.ObjectId, required: true },
  title: { type: String, maxLength: 100, required: true },
  description: { type: String, maxLength: 200, required: true },
  category: { type: String, enum: ['Home Repair', 'Tutoring & Crafting', 'Errands & Transportation', 'Moving & Hauling'], required: true },
  location: { type: String, maxLength: 100, required: true },
  // desiredDateAndTime: { type: String, maxLength: 200, required: true },
  proprosedPrice: { type: String, maxLength: 100, required: true }
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  })

TaskSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})