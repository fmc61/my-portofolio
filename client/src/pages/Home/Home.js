import React from "react";
import "./Home.css";
import Resume from "../../assets/doc/Resume.txt";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../../Context/ThemeContext";
import Fade from "react-reveal/Fade";

function Home() {
  const [theme, setTheme] = useTheme();

  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="home-content">
          <Fade right>
            <h2>Hi 👋 I'M</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Developer!",
                    "Mern-Stack Developer!",
                    "React Native Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>

          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?.phone=252612836161"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
            
              <a className="btn btn-cv" href="../../assets/doc/my-cv.pdf" download="my-cv.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Home;
