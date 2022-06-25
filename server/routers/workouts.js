const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workouts");

router.route("/").get(getWorkouts).post(createWorkout);
router.route("/:id").get(getWorkout).patch(updateWorkout).delete(deleteWorkout);

module.exports = router;
