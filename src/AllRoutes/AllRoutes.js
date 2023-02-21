import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import PrivateRoute from "./PrivateRoute";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:8080");

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home socket={socket} />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
