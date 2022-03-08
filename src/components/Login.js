import { Button, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { QuestionContext } from "../state/QuestionContext";

const Login = () => {
  const { setUserData, setLogin } = useContext(QuestionContext);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const LoginUser = (user) => {
    axios.post("http://localhost:3001/users/login", user).then((res) => {
      if (res.status === 200) {
        setUserData(res.data);
        localStorage.setItem("userData", JSON.stringify(res.data));
        setLogin(true);
      } else {
        alert("Invalid credentials");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Heading as="h1" size="xl">
        Login
      </Heading>
      <div style={{ width: "300px", marginTop: "20px" }}>
        <Input
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          onClick={() => {
            LoginUser(user);
          }}
          style={{
            width: "100%",
          }}
          mt={4}
          backgroundColor="red.500"
          color="white"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
