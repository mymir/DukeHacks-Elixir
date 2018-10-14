import React, { Component } from 'react';
import './App.css';
import {  BrowserRouter, NavLink, Route, Link } from "react-router-dom";

import berry from './images/gooseberry.png'
import water from './images/water.jpeg'
import ginger from './images/ginger.jpg'
import coffee from './images/coffee.jpg'
import tea from './images/tea.jpeg'
import washcloth from './images/washcloth.jpeg'
import honey from './images/honey.jpg'
import watermelon from './images/watermelon.jpg'
import aromatherapy from './images/aromatherapy.jpg'
import vitamind from './images/vitamind.jpg'

const illnesses = [{text:"Acne", label:"/acne",  rating:"5", reviews:"12", img:<img class="icon" src={berry} alt="gooseberry"/>},
  {text:"Anxiety", label:"/anxiety",  rating:"5", reviews:"3", img:<img class="icon" src={tea} alt="tea"/>},
  {text:"Common cold", label:"/cold", rating:"3", reviews:"10", img:<img class="icon" src={water} alt="water"/>},
  {text:"Digestive Disorders", label:"/cold",  rating:"2", reviews:"3", img:<img class="icon" src={honey} alt="honey"/>},
  {text:"Eye health", label:"/cold",  rating:"1", reviews:"6", img:<img class="icon" src={washcloth} alt="washcloth"/>},
  {text:"Menstrual health", label:"/cold",  rating:"2", reviews:"18", img:<img class="icon" src={vitamind} alt="vitamind"/>},
  {text:"Migraines", label:"/cold",  rating:"3", reviews:"1", img:<img class="icon" src={coffee} alt="coffee"/>},
  {text:"Nausea", label:"/cold", rating:"2", reviews:"15", img:<img class="icon" src={ginger} alt="ginger"/>},
  {text:"Sleep Disorders", label:"/cold",  rating:"3", reviews:"10", img:<img class="icon" src={aromatherapy} alt="aromatherapy"/>}];
const list = illnesses.map((illness) =>
  <tr><NavLink to={illness.label}>
    <td class="pictd">{illness.img}</td>
    <td><h2 class="title"><strong>{illness.text}</strong></h2></td>
    <td><p class="detail"><strong>Rating:</strong> {illness.rating}/5</p></td>
    <td><p class="detail"><strong>Reviews:</strong> {illness.reviews}</p></td>
  </NavLink></tr>
);

class Table extends Component {
  render() {
    return (
      <div className="table-wrapper">
        <header className="App-header">
          <h1>List of Illnesses</h1>
          <table className="table hover">
            <thead></thead>
            <tbody>{list}</tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default Table;
