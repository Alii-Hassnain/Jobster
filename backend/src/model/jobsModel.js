const mongoose = require("mongoose");
const { type } = require("os");
const { Schema } = mongoose;

const JobSchema = new Schema({
  position: {
    type: String,
    required: [true, "Position is required"],
    trim: true,
  },
  company: {
    type: String,
    required: [true, "Company is required"],
    trim: true,
  },
  jobType: {
    type: String,
    enum: ["full-time", "part-time", "remote", "internship"],
    default: "full-time",
  },
  jobLocation:{
    type: String,
    required: [true, "Job Location is required"],
    trim: true,
  },
  jobStatus: {
    type: String,
    enum: ["interview", "declined", "pending"],
    default: "pending",
  },
}, { timestamps: true });

module.exports = mongoose.model("Job", JobSchema);
