import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { QuestionProvider } from "./state/QuestionContext";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <QuestionProvider>
        <App />
      </QuestionProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
