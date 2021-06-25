import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import CreateExercise from "./components/CreateExercise";
import EditExercise from "./components/EditExercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
