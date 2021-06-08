import React, { Component } from 'react';
import Lab1 from './Lab1';
import Lab2 from './Lab2';
import Lab3 from './Lab3';
import Lab4 from './Lab4';
import Menu from './Menu';
import Tab1 from './Tab1';
import { AnimatePresence, motion } from "framer-motion";


export default class Slide3 extends Component {
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

    const pageStyle = {
      position: "absolute"
    };
    return (
      <div className="indexxx"
      >
        <div className="slides">
          <Menu />
          <div className="slide" id={3} >
            <motion.div className="content third-content" initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>
              <div>
                <Tab1 />
                <div className="tab-content">
                  <Lab1 />
                  <Lab2 />
                  <Lab3 />
                  <Lab4 />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}
