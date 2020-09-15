import React from "react";
import { GithubState } from "../../config";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../Home/Home";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <Router>
        <Home />
      </Router>
    </GithubState>
  );
};

export default App;
