import React, { Component } from 'react';
import {  BrowserRouter, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from './Table.js';
import Home from './Home.js';
import Nav from './Nav.js';

import logo from './images/logo.png'

import Anxiety from './pages/Anxiety.js';
import Acne from './pages/Acne.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav></Nav>
            <Switch>
              <Route path={"/illnesses"} component={Table}/>
              <Route path={"/home"} component={Home}/>
              <Route path={"/anxiety"} component={Anxiety}/>
              <Route path={"/acne"} component={Acne}/>
            </Switch>
          </div>
        </BrowserRouter>
        <img class="pic" src={logo} alt="logo"/>
      </div>
    );
  }
}

export default App;
