import React, { useState, useEffect } from "react";
import { GithubContext } from "../../context/GithubContext";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../Home/Home";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("github");
  const [user, setUser] = useState(null);
  const [overview, setOverview] = useState(null);
  const [repos, setRepos] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [error, setError] = useState("");

  const URL_BASE = `https://api.github.com/users/`;

  const getData = () => {
    fetch(`${URL_BASE}${search}`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setError("");
        getRepos();
        getOverview();
        getFollowers();
      })
      .catch((err) => {
        setUser(null);
        setRepos(null);
        setFollowers(null);
        setOverview(null);
        setError("user not found");
      });
  };

  const getSearch = (e) => {
    e.preventDefault();
    getData();
    setSearch("");
  };

  const getRepos = () => {
    fetch(`${URL_BASE}${search}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  };

  const getOverview = () => {
    fetch(`${URL_BASE}${search}/repos?per_page=8&sort=asc`)
      .then((res) => res.json())
      .then((data) => setOverview(data));
  };

  const getFollowers = () => {
    fetch(`${URL_BASE}${search}/followers`)
      .then((res) => res.json())
      .then((data) => setFollowers(data));
  };

  useEffect(() => {
    getData();
    setSearch("");
  }, []);

  return (
    <GithubContext.Provider
      value={{
        user,
        repos,
        followers,
        overview,
        search,
        error,
        setSearch,
        getSearch,
      }}
    >
      <Router>
        <Home />
      </Router>
    </GithubContext.Provider>
  );
};

export default App;
