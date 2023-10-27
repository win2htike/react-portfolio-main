import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello and welcome!</h1>
        <p className={styles.description}>
          I'm Win Win, a passionate and innovative software Engineer!
        </p>
        <a href="https://docs.google.com/document/d/1av_Cec9ZJuhk5VmP6F0fVF4vKF8rKaOh/edit?usp=sharing&ouid=106360976631157808521&rtpof=true&sd=true" target="_blank" className={styles.resumeBtn}>
          Check out my Resume!
        </a>
      </div>
      <img
        src={getImageUrl("hero/winwin.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
