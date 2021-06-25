import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ExerciseList = () => {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/exercises/")
      .then((response) => {
      response.data.map((data) => {
        setExercise((oldArray) => [...oldArray, data]);
        return 0;
      });
    });
  }, []);

  const deleteExercise = (id) => {
    axios.delete("http://localhost:3000/exercises/" + id)
      .then((response) => {
      console.log(response.data);
    });

    setExercise(exercise.filter(ex => ex._id !== id))
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercise.map((data, index) => (
            <tr key={index}>
              <td>{data.username}</td>
              <td>{data.description}</td>
              <td>{data.duration}</td>
              <td>{data.date.substring(0, 10)}</td>
              <td>
                <Link className="btn btn-primary mx-2" to={"/edit/" + data._id}>edit</Link> 
                <button className="btn btn-danger"
                  href='/'
                  onClick={() => {
                    deleteExercise(data._id);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ExerciseList;