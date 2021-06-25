import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CreateExercise = () => {
  const [Exercise, setExericse] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  });

  const [Users, setUsers] = useState([])

  const onSubmit = () => {
    axios
      .post("http://localhost:3000/exercises/add", Exercise)
  };

  useEffect( () => {
     axios
      .get("http://localhost:3000/users")
      .then(res => {
        res.data.map(user => {
          setUsers(oldArray => [...oldArray, user.username])
          return 0;
        })
      })

      
  }, []);


  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={Exercise.username}
            onChange={(e) =>
              setExericse({ ...Exercise, username: e.target.value })
            }
          >
            {Users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={Exercise.description}
            onChange={(e) =>
              setExericse({ ...Exercise, description: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={Exercise.duration}
            onChange={(e) =>
              setExericse({ ...Exercise, duration: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={Exercise.date}
              onChange={date =>
                setExericse({ ...Exercise, date: date })
              }
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary mt-2"
          />
        </div>
      </form>
    </div>
  );
};
export default CreateExercise;