import { Button, Center, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../state/QuestionContext";

const Result = () => {
  const { userData, result, LogoutUser } = useContext(QuestionContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Center flexDirection={"column"}>
        <Heading size="lg">Result</Heading>
        <Heading size="xl" mt={"20"} mb={"10"}>
          Hi {userData.name} you have got {result} in your last exam
        </Heading>
        <Button
          bg={"red.500"}
          color={"white"}
          onClick={() => {
            LogoutUser();
            //redirect to login page
            window.location.href = "/";
          }}
        >
          Logout
        </Button>
      </Center>
    </div>
  );
};

export default Result;
