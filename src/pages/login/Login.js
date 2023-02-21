import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { login } from "../../redux/auth/auth.actions";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const toast = useToast();
  const [form, setForm] = useState(initialState);
  const data = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  if (data.token !== null) {
    toast({
      title: "Login success",
      description: data.message,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    return <Navigate to="/home" />;
  }

  if (data.loading) {
    return <Heading>...Loading</Heading>;
  }

  if (data && data?.error) {
    toast({
      title: "error",
      description: "something went wrong",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <Box w="50%" textAlign={"center"} m="auto" mt="90px" py={5}>
      <Heading>Login</Heading>
      <FormControl>
        <FormLabel textAlign={"center"} fontWeight={"bold"} mt="15px">
          Email
        </FormLabel>
        <Input
          type={"email"}
          w="50%"
          h="50px"
          mt="10px"
          borderRadius={"10px"}
          pl="20px"
          fontSize={"18px"}
          placeholder={"Email Address"}
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <FormLabel textAlign={"center"} fontWeight={"bold"} mt="15px">
          Password
        </FormLabel>
        <Input
          type={"password"}
          w="50%"
          h="50px"
          mt="10px"
          borderRadius={"10px"}
          pl="20px"
          fontSize={"18px"}
          placeholder={"Password"}
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </FormControl>
      <Button
        display={"block"}
        m="auto"
        mt="20px"
        w="200px"
        h="50px"
        borderRadius={"5px"}
        background={"black"}
        color="white"
        fontSize={"16px"}
        onClick={handleSubmit}
        _hover={{
          background: "white",
          color: "black",
          border: "1px solid black",
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Login;
