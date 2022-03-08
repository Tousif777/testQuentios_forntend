import React, { useContext } from "react";
import { QuestionContext } from "../state/QuestionContext";

const Result = () => {
  const { score } = useContext(QuestionContext);

  return <div>Your score is {score}</div>;
};

export default Result;
