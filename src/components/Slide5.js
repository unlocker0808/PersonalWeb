import React, { Component } from 'react';
import Menu from './Menu';
import { AnimatePresence, motion } from "framer-motion";


export default class Slide5 extends Component {
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
          <div className="slide" id={5} >
            <motion.div className="content fifth-content" initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>
              <div className="container-fluid">
                <div className="col-md-6">
                  <div id="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15647.512490303796!2d106.82064371270394!3d11.343611771374912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174bc71d4975c67%3A0xd981e09a434855e3!2zQW4gQsOsbmgsIFBow7ogR2nDoW8sIELDrG5oIETGsMahbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1616317042336!5m2!1svi!2s"
                      width="100%"
                      height="500px"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <form id="contact" action method="post">
                    <div className="row">
                      <div className="col-md-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your name..."
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your email..."
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <input
                            name="subject"
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject..."
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows={6}
                            className="form-control"
                            id="message"
                            placeholder="Your message..."
                            required
                            defaultValue={''}
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="btn pulse animated infinite">
                            Send Now
                      </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}
