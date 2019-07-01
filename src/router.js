import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Task from "./components/Task";
import Home from "./components/Home";

const Router = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/task" component={Task} />
  </BrowserRouter>
);

export default Router;
