import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

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
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
