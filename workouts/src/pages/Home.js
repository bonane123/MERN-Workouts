import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/workouts");
      const json = response.json();
      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchData();
  }, []);
  if (workouts) {
    return workouts.map((workout) => (
      // const { _id, title, reps, load } = workout;
      // return (
      <div className="container-box" key={workout._id}>
        <h3>
          workout: <span>{workout.title}</span>
        </h3>
        <div className="small-box">
          <p>
            Reps: <strong>{workout.reps}</strong>
          </p>
          <p>
            Load: <strong>{workout.load}</strong>
          </p>
        </div>
      </div>
    ));
  }
}

export default Home;
