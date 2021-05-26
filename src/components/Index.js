import React, {Component} from 'react';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';


export default class Index extends Component {
  render () {
    return (
      <div className="indexxx">
        <div className="slides">
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
          <Slide5 />
        </div>
      </div>
    );
  }
}