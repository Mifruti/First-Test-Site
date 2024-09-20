import React from "react";
import { Link } from "react-router-dom";

import sphere from "../assets/img/Abstract Design.png";
import link_logo from "../assets/img/Icon.png";
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
            <div>
              <p>
                obcaecati optio perspiciatis porro quaerat quasi quia ratione
                recusandae repellendus sint, soluta tenetur ullam{" "}
              </p>
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
    </section>
  );
};

export default JorneySection;
