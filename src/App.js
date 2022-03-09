import "./App.css";
import Exam from "./components/Exam";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Result from "./components/Result";
import { QuestionContext } from "./state/QuestionContext";
import { useContext } from "react";

function App() {
  const { login, result } = useContext(QuestionContext);
  return (
    <Router>
      <Routes>
        {login === true ? (
          <>
            {result === "" ? (
              <>
                <Route path="/" element={<Exam />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Result />} />
              </>
            )}
          </>
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
