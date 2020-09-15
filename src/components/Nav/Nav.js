import React from "react";
import { NavLink, Route } from "react-router-dom";
import Overview from "../Overview/Overview";
import Repos from "../Repos/Repos";
import Followers from "../Followers/Followers";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="wrapper">
      <div className="nav">
        <NavLink to="/overview" activeClassName="active">
          <i class="fas fa-book-open"></i>
          Overview
        </NavLink>
        <NavLink to="/repos" activeClassName="active">
          <i className="fas fa-laptop-code"></i>
          Repos
        </NavLink>
        <NavLink to="/followers" activeClassName="active">
          <i className="fas fa-book-reader"></i>
          Followers
        </NavLink>
      </div>

      <div className="navWrapper">
        <Route path="/overview" component={Overview} />
        <Route path="/repos" component={Repos} />
        <Route path="/followers" component={Followers} />
      </div>
    </div>
  );
};

export default Nav;
