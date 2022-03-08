import {
  Box,
  Button,
  Center,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../state/QuestionContext";
import { useNavigate } from "react-router-dom";

const Exam = () => {
  const { questions, score, setScore, LogoutUser } =
    useContext(QuestionContext);
  const [selectedoptions, setSelectedoptions] = useState([]);
  let navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div style={{ margin: "20px" }}>
        <h1>Exam</h1>
      </div>
      <Center>
        <Box>
          {questions.map((question, index) => {
            return (
              <div key={index}>
                <p>
                  {index + 1}. {question.question}
                </p>
                <RadioGroup
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  defaultValue="a"
                >
                  <Radio
                    onChange={(e) => {
                      setSelectedoptions([...selectedoptions, e.target.value]);
                    }}
                    value={question.option1}
                  >
                    {question.option1}
                  </Radio>
                  <Radio
                    onChange={(e) => {
                      setSelectedoptions([...selectedoptions, e.target.value]);
                    }}
                    value={question.option2}
                  >
                    {question.option2}
                  </Radio>
                  <Radio
                    onChange={(e) => {
                      setSelectedoptions([...selectedoptions, e.target.value]);
                    }}
                    value={question.option3}
                  >
                    {question.option3}
                  </Radio>
                  <Radio
                    onChange={(e) => {
                      setSelectedoptions([...selectedoptions, e.target.value]);
                    }}
                    value={question.option4}
                  >
                    {question.option4}
                  </Radio>
                </RadioGroup>
              </div>
            );
          })}
        </Box>
      </Center>

      <Center>
        <Button
          onClick={() => {
            //calculate all correct answers and set score
            let correctAnswers = 0;
            questions.forEach((question, index) => {
              if (question.answer === selectedoptions[index]) {
                correctAnswers++;
              }
            });
            setScore(correctAnswers);
            navigate("/result");
          }}
          style={{
            width: "10%",
          }}
        >
          Submit
        </Button>
        <Button
          onClick={() => {
            LogoutUser();
          }}
        >
          Logout
        </Button>
      </Center>
    </div>
  );
};

export default Exam;
