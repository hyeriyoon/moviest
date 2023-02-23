//Page - About

import "../styles/index.css";

import { useEffect } from "react";
import { appTitle } from "../global/globalVariables";
import tmdbLogo from "../image/tmdb-logo.svg";

const About = () => {
  useEffect(() => {
    document.title = `${appTitle} - About`;
  }, []);

  return (
    <section className="about">
      <h2>About</h2>
      <p>
        Movie St. is a movie database website where users can find movies based
        on the categories: now playing, most popular, top rated and upcoming.
        Browse movies you like and save them for your list!
      </p>
      <div className="tmdb">
      <p>
      "This product uses the TMDb API but is not endorsed or certified by TMDb."
      </p>
      <img src={tmdbLogo} alt="tmdb logo" />
      </div>
    </section>
  );
};

export default About;
