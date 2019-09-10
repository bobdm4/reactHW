import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import About from '../pages/About/About';
import Pets from '../pages/Pets/Pets';
import Nav from './Nav/Nav';
import PetsAbout from './PetsAbout/PetsAbout';
import style from './App.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav />
        <Switch style={style.styleApp}>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={About} />
          <Route path="/pets/:id" component={PetsAbout} />
          <Route exact path="/pets" component={Pets} />
          <Route component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
