import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const handlerLoginButton = () => {
    console.log(username);
    console.log(password);
    navigate("/dashboard")
  };
  return (
    <>
    <FormControl defaultValue="" required>
      <Input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></Input>
      <FormLabel>Username</FormLabel>
      <FormHelperText />
    </FormControl>
    <FormControl defaultValue="" required>
      <Input
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></Input>
      <FormLabel>Password</FormLabel>
      <FormHelperText />
    </FormControl>

    <Button color="secondary" onClick={handlerLoginButton}>
      Login{" "}
    </Button>
  </>
);
}

export default Login;
