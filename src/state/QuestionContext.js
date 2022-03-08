import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Login from "../components/Login";

export const QuestionContext = createContext();

const localStorageUserData = JSON.parse(localStorage.getItem("userData"));

export const QuestionProvider = (props) => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [userData, setUserData] = useState(localStorageUserData);
  const [login, setLogin] = useState(localStorageUserData ? true : false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/questions")
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const LogoutUser = () => {
    setUserData(null);
    localStorage.removeItem("userData");
    setLogin(false);
  };
  return (
    <QuestionContext.Provider
      value={{
        questions,
        score,
        setScore,
        userData,
        login,
        LogoutUser,
        setUserData,
        setLogin,
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
