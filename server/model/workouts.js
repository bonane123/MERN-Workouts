const mongoose = require("mongoose");
const { Schema } = mongoose;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide workout name"],
    },
    reps: {
      type: Number,
      required: [true, "Please provide repetition"],
    },
    load: {
      type: Number,
      required: [true, "Please provide load weight"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Workout", workoutSchema);
