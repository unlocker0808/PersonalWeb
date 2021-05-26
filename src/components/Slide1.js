import React, {Component} from 'react';
import Menu from './Menu';

export default class Slide1 extends Component {
  render () {
    return (
        <div>
            <Menu />
      <div className="slide" id={1}>
        <div className="content first-content">
          <div className="container-fluid">
            <div className="col-md-3">
              <div className="author-image">
                <img src="img/author_image.png"  alt="Author Image" />
              </div>
            </div>
            <div className="col-md-9">
              <h2>Le Quoc Thinh</h2>
              <p>
                MY NAME IS
                {' '}
                <strong>
                  <a rel="nofollow" href="https://fb.com/unlocker0808">
                    LE QUOC THINH
                  </a>
                </strong>
                . A PERSON WHO LIKES TO LEARN, EXPLORE AND DISCOVER THINGS AROUND. ENJOY RESEARCHING TOPICS RELATED TO WEBSITE DEVELOPMENT AND ARE
                <em>STILL IN THE PROCESS OF GAINING KNOWLEDGE.</em>
              </p>
              <div className="main-btn pulse animated infinite"><a href="#2">Information</a></div>
              <div className="fb-btn pulse animated infinite">
                <a rel="nofollow" href="https://fb.com/unlocker0808">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
