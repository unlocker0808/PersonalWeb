import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Index from '../components/Index';
import FPattern from '../FPattern/FPattern';
import ZPattern from '../ZPattern/ZPattern';
import Gym from '../Gym/Gym';


export default class MyRounter extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/FPattern" component={FPattern} />
          <Route exact path="/ZPattern" component={ZPattern} />
          <Route exact path="/Gym" component={Gym} />
        </div>
      </Router>
    );
  }
}
