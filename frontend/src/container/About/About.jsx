import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";

import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Read <span>About</span> Me!
      </h2>

      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <h2 className="app__profile-title" style={{ marginTop: 20 }}>
            Hay there! I am{" "}
            <span style={{ color: "var(--secondary-color)" }}>Egor</span>,
            <br /> web developer and a computer science student!
          </h2>
          <p className="app__profile-text" style={{ marginTop: 10 }}>
            I have 4 years of development and almost a year of web development.
            And almost a year of web development I am communicative and a quick
            learner I like and I want to make responsive and good-looking modern
            designs. I have experience in frontend development using
            technologies such as HTML, CSS/SASS/SCSS, JavaScript/TypeScript,
            React, Redux, RTK Query, tailwind and etc. I also have experience in
            developing many other areas, from MicroShell (some kind of native
            Linux shell) in C and SecureNotepad (using modern encryption
            methods) in Kotlin/Java to Spotify voice control in Python using
            NLP. At the same time I have many years of experience creating games
            and dance music.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <img src={images.myProfile} alt="Hey" />
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
