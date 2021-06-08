import React, { Component } from 'react';
import Menu from './Menu';
import { AnimatePresence, motion } from "framer-motion";

export default class Slide1 extends Component {

  render() {
    const pageVariants = {
      initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
      },
      in: {
        opacity: 1,
        x: 0,
        scale: 1
      },
      out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2
      }
    };

    const pageTransition = {
      type: "tween",
      ease: "anticipate",
      duration: 0.5
    };
    return (

      <div className="indexxx"
      >
        <div className="slides">
          <Menu />
          <div className="slide" id={1}>
            <motion.div className="content first-content"  initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>
              <div className="container-fluid">
                <div className="col-md-3">
                  <div className="author-image">
                    <img src="img/author_image.png" alt="Author Image" />
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
                  <div className="main-btn pulse animated infinite"><a href="/about">Information</a></div>
                  <div className="fb-btn pulse animated infinite">
                    <a rel="nofollow" href="https://fb.com/unlocker0808">
                      Facebook
                </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}
