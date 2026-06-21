import mongoose from "mongoose";
import {
  MIN_LENGTH_TITLE,
  MAX_LENGTH_TITLE,
  MIN_LENGTH_DESCRIPTION,
  MAX_LENGTH_DESCRIPTION,
} from "../config/constants.js";

const kanbanSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    minLength: MIN_LENGTH_TITLE,
    maxLength: MAX_LENGTH_TITLE,
  },
  description: {
    type: String,
    trim: true,
    minLength: MIN_LENGTH_DESCRIPTION,
    maxLength: MAX_LENGTH_DESCRIPTION,
  },
  deadline: {
    type: Date,
    min: [Date.now, "Deadline cannot be passed into the past"],
  },
  priority: {
    type: String,
    required: true,
    enum: ["None", "Low", "Medium", "High"],
    default: "None",
  },
  status: {
    type: String,
    enum: ["backlog", "todo", "in-progress", "finished"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Kanban = mongoose.model("Kanban", kanbanSchema);
