import React, {Component} from 'react';

export default class Menu extends Component {
  render () {
    return (
      <nav className="first">
        <div className="logo pulse animated infinite">
          <img src="img/logo.png"/>
        </div>
        <ul>
          <li><a href="#1"><i className="fa fa-home" /> <em>Home</em></a></li>
          <li><a href="#2"><i className="fa fa-user" /> <em>About</em></a></li>
          <li><a href="#3"><i className="fa fa-pencil" /> <em>Labs</em></a></li>
          <li>
            <a href="#4"><i className="fa fa-image" /> <em>Result</em></a>
          </li>
          <li>
            <a href="#5"><i className="fa fa-envelope" /> <em>Contact</em></a>
          </li>
        </ul>
      </nav>
    );
  }
}
