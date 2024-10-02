import React from "react";
import { Link } from "react-router-dom";

import icon_one from "../assets/img/1.png";
import icon_two from "../assets/img/2.png";
import icon_three from "../assets/img/3.png";
import sphere from "../assets/img/Abstract Design.png";
import link_logo from "../assets/img/Icon.png";
import link from "../assets/img/link.png";
import person_one from "../assets/img/p1.png";
import person_two from "../assets/img/p2.png";
import person_three from "../assets/img/p3.png";
import person_four from "../assets/img/p4.png";
import styles from "./JorneySection.module.scss";

const JorneySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section_wrapper}>
        <div className={styles.left_block}>
          <div className={styles.left_block_up}>
            <div>
              <p className={styles.text_titel_secondary}>
                Your Journey to Tomorrow Begins Here
              </p>
              <p className={styles.text_titel}>
                Explore the Frontiers of Artificial Intelligence
              </p>
              <p className={styles.text_titel_low}>
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines think, learn, and
                reshape the future. Join us on this visionary expedition into
                the heart of AI.
              </p>
            </div>
          </div>
          <div className={styles.left_block_down}>
            <div className={styles.case_stats}>
              <p className={styles.first_stats}>
                300 <span className={styles.plus}>+</span>
              </p>
              <p className={styles.second_stats}>Resources available</p>
            </div>
            <div className={styles.case_stats}>
              <p className={styles.first_stats}>
                12k <span className={styles.plus}>+</span>{" "}
              </p>
              <p className={styles.second_stats}>Total Downloads</p>
            </div>
            <div className={styles.case_stats}>
              <p className={styles.first_stats}>
                10k <span className={styles.plus}>+</span>{" "}
              </p>
              <p className={styles.second_stats}>Active Users</p>
            </div>
          </div>
        </div>
        <div
          className={styles.right_block}
          style={{ backgroundImage: `url(${sphere})` }}
        >
          {/*Задали задний фон картинкой*/}
          {/*<img className={styles.sphere} src={sphere} alt="" />*/}
          <div className={styles.right_box}>
            <div className={styles.person_box}>
              <div className={styles.box_border}>
                <img className={styles.person_photo} src={person_one} alt="" />
                <img className={styles.person_photo} src={person_two} alt="" />
                <img
                  className={styles.person_photo}
                  src={person_three}
                  alt=""
                />
                <img className={styles.person_photo} src={person_four} alt="" />
              </div>
            </div>
            <div className={styles.text_box}>
              <p className={styles.right_titel_text}>Explore 1000+ resources</p>
              <p className={styles.right_second_text}>
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </p>
            </div>
            <Link to={"/"} className={styles.button_link}>
              <p>Explore Resources</p>
              <img className={styles.link_logo} src={link_logo} />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.last_block}>
        <div className={styles.last_box}>
          <div className={styles.box}>
            <img className={styles.last_icon} src={icon_one} alt="" />
            <div className={styles.last_link_text}>
              <div className={styles.text_last_block}>
                <h3>Latest News Updates</h3>
                <h4>Stay Current</h4>
              </div>
              <img className={styles.link} src={link} alt="" />
            </div>
            <h5>Over 1,000 articles published monthly</h5>
          </div>
          <div className={styles.box}>
            <img className={styles.last_icon} src={icon_two} alt="" />
            <div className={styles.last_link_text}>
              <div className={styles.text_last_block}>
                <h3>Expert Contributors</h3>
                <h4>Trusted Insights</h4>
              </div>
              <img className={styles.link} src={link} alt="" />
            </div>
            <h5>50+ renowned AI experts on our team</h5>
          </div>
          <div className={styles.box}>
            <img className={styles.last_icon} src={icon_three} alt="" />
            <div className={styles.last_link_text}>
              <div className={styles.text_last_block}>
                <h3>Global Readership</h3>
                <h4>Worldwide Impact</h4>
              </div>
              <img className={styles.link} src={link} alt="" />
            </div>
            <h5>2 million monthly readers</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JorneySection;
