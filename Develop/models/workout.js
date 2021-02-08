const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    lastUpdated: Date,
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter Exercise Type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter Exercise Name"
        },
        duration: {
          type: Number,
          required: "Enter Duration of Exercise"
        },
        weight: {
          type: Number,
          required: "Enter Weight/Resistance Amount"
        },
        reps: {
          type: Number,
          required: "Enter Exercise Reps"
        },
        sets: {
          type: Number,
          required: "Enter Exercise Sets"

        }
      }
    ]
  });
        


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;