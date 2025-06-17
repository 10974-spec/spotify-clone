import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: Boolean,
    default: false,
  },
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },

},{timestamps: true}) // createdAt, updatedAt

 export const User = mongoose.model("User", userSchema);