require("dotenv").config();
const express = require("express");
const app = express();
const workouts = require("./routers/workouts");
const connectDB = require("./db/connect");

const port = process.env.PORT || 5000;

//route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to our app</h1>");
});
//middleware
app.use(express.json());
app.use("/api/workouts", workouts);

//listening to server

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening to port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
