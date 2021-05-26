import React, {Component} from 'react';
import Lab1 from './Lab1';
import Lab2 from './Lab2';
import Lab3 from './Lab3';
import Lab4 from './Lab4';
import Tab1 from './Tab1';

export default class Slide3 extends Component {
  render () {
    return (
      <div className="slide" id={3}>
        <div className="content third-content">
          <div>
            <Tab1/>
            <div className="tab-content">
              <Lab1/>
              <Lab2/>
              <Lab3/>
              <Lab4/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
