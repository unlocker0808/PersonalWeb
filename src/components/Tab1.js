import React, {Component} from 'react';

export default class Tab1 extends Component {
  render () {
    return (
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            role="tab"
            data-toggle="tab"
            href="#tab-1"
          >
            Lab 1
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" role="tab" data-toggle="tab" href="#tab-2">
            Lab 2
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" role="tab" data-toggle="tab" href="#tab-3">
            Lab 3
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" role="tab" data-toggle="tab" href="#tab-4">
            Lab 4
          </a>
        </li>
      </ul>
    );
  }
}
