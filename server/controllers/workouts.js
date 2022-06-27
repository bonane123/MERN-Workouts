const asyncWrapper = require("express-async-wrapper");
const mongoose = require("mongoose");
const Workout = require("../model/workouts");

const getWorkouts = asyncWrapper(async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
});

const createWorkout = asyncWrapper(async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json(workout);
  if (!workout) {
    res.status(404).json({ error: "No workout created" });
  }
});

const getWorkout = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: `No such workout` });
  }
  const workout = await Workout.findOne({ _id: id });
  if (!workout) {
    return res.status(404).json({ msg: `No such workout with id : ${id}` });
  }
  res.status(200).json(workout);
});

const updateWorkout = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "No such workout" });
  }
  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });
  if (!workout) {
    return res.status(404).json({ msg: "No such workout" });
  }
  res.status(200).json(workout);
});

const deleteWorkout = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "No such workout " });
  }
  res.status(200).json(workout);
});

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
