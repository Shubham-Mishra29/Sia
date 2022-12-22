import React from "react";
import "./upcomingEvents.css";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

export default function upcomingEvents() {
  return (
    <div className="main-upcoming">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 1 }
        }}

      >
        <div className="header">UPCOMING EVENTS</div>
      </motion.div>
      <hr />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        variants={{
          visible: { y: 0 },
          hidden: { y: 200 }
        }}
        style={{ overflow: "hidden",width : "100%" }}
      >
        <div className="events ">
          <Link className="eventBoxContainer" to="/events">
            <div className="event-1">
              <img src="images/image9.jpg" alt="" />
              <div className="desc">
                <div className="calendar">
                  <div className="month">July</div>
                  <div className="date">18</div>
                </div>
                <div className="descriptions">
                  <div className="first">
                  SIA New Year’s Party
                  </div>
                  <div className="second_desc">
                    Loreum ipsum is dummy text. Loreum ipsum is dummy text.
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link className="eventBoxContainer" to="/events">
            <div className="event-2">
              <img src="images/image8.jpg" alt="" />
              <div className="desc">
                <div className="calendar">
                  <div className="month">July</div>
                  <div className="date">18</div>
                </div>
                <div className="descriptions">
                  <div className="first">
                    SIA Pongal Festival (2023)
                  </div>
                  <div className="second_desc">
                    Loreum ipsum is dummy text. Loreum ipsum is dummy text.
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link className="eventBoxContainer" to="/events">
            <div className="event-3">
              <img src="images/event3.png" alt="" />
              <div className="desc">
                <div className="calendar">
                  <div className="month">July</div>
                  <div className="date">18</div>
                </div>
                <div className="descriptions">
                  <div className="first">Tasty Food & Drinks Festrival-2022.</div>
                  <div className="second_desc">
                    Loreum ipsum is dummy text. Loreum ipsum is dummy text.
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div></motion.div>
    </div>

  );
}
