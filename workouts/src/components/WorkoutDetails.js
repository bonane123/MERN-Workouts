const WorkoutDetails = ({ workout }) => {
  return (
    <div className="small-box">
      <h3>{workout.title}</h3>
      <p>
        Load: <strong>{workout.load}</strong>
      </p>
      <p>
        Reps: <strong>{workout.reps}</strong>
      </p>
      <p>
        Date: <strong>{workout.createdAt}</strong>
      </p>
    </div>
  );
};

export default WorkoutDetails;
