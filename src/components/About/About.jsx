import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Career</h3>
              <p>
                Innovative software developer with almost 4 years of professional experience in C#.NET, ASP.NET Core MVC, EF Core, LINQ, Angular, MSSQL and Azure. Skilled in a variety of software engineering techniques, including design patterns and object-oriented programming. A fast learner with a proven track record of quickly adapting to new technologies. Genuinely enjoy learning and place a high value on personal and professional growth.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Beyond the Screen</h3>
              <p>
              When I'm not immersed in lines of code and algorithms, I'm indulging in a variety of hobbies. I love reading books, watching movies to unwind, playing badminton for some physical activity. These activities are my perfect way to recharge and maintain a vibrant work-life balance.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
