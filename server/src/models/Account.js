import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, maxLength: 100, required: true },
    picture: { type: String, maxLength: 1000 },
    skills: { type: String, maxLength: 1000 }
    // NOTE If you wish to add additional properties do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

