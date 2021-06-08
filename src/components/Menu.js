import React, {Component} from 'react';

export default class Menu extends Component {
  render () {
    return (
      <nav className="first">
        <div className="logo pulse animated infinite">
          <img src="img/logo.png"/>
        </div>
        <ul>
          <li><a href="/"><i className="fa fa-home" /> <em>Home</em></a></li>
          <li><a href="/about"><i className="fa fa-user" /> <em>About</em></a></li>
          <li><a href="/labs"><i className="fa fa-pencil" /> <em>Labs</em></a></li>
          <li>
            <a href="/result"><i className="fa fa-image" /> <em>Result</em></a>
          </li>
          <li>
            <a href="/contact"><i className="fa fa-envelope" /> <em>Contact</em></a>
          </li>
        </ul>
      </nav>
    );
  }
}
