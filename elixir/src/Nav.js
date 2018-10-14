import React, { Component } from 'react';
import './Nav.css';
import {  BrowserRouter, NavLink, Route, Link } from "react-router-dom";

const links = ["Home.js",
  "List.js",
  "Area.js",
  "Citations.js"];
const bar = links.map((link) =>
  <li>{link}</li>
);

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <nav class = "main">
          <ul class = "bar">
            <NavLink to="/home"><li class = "linkitem"><p class = "link">Home</p></li></NavLink>
            <NavLink to="/illnesses"><li class = "linkitem"><p class = "link">List Of Illnesses</p></li></NavLink>
            <NavLink to="/home"><li class = "linkitem"><p class = "link">Area</p></li></NavLink>
            <NavLink to="/home"><li class = "linkitem"><p class = "link">Citations</p></li></NavLink>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
