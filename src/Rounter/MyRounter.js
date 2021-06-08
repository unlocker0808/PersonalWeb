import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FPattern from '../FPattern/FPattern';
import ZPattern from '../ZPattern/ZPattern';
import Gym from '../Gym/Gym';
import Slide1 from '../components/Slide1';
import Slide2 from '../components/Slide2';
import Slide3 from '../components/Slide3';
import Slide4 from '../components/Slide4';
import Slide5 from '../components/Slide5';
import { AnimatePresence, motion } from "framer-motion";

export default class MyRounter extends Component {
  render() {
    return (
      <AnimatePresence exitBeforeEnter>
        <Router >
          <div>
            <Route exact path="/" component={Slide1} />
            <Route exact path="/about" component={Slide2} />
            <Route exact path="/labs" component={Slide3} />
            <Route exact path="/result" component={Slide4} />
            <Route exact path="/contact" component={Slide5} />
            <Route exact path="/FPattern" component={FPattern} />
            <Route exact path="/ZPattern" component={ZPattern} />
            <Route exact path="/Gym" component={Gym} />
          </div>
        </Router>
      </AnimatePresence>
    );
  }
}
