import React from "react";
import Jump from "react-reveal/Jump";
import "./About.css";

function About() {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://avatars.githubusercontent.com/u/134860836?v=4"
                alt="profile pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                I'M MERN stack developer, I specialize in building dynamic and
                responsive web applications using MongoDB, Express.js, React,
                and Node.js. With a strong foundation in JavaScript, I enjoy
                creating seamless user experiences and efficient back-end
                solutions. My problem-solving skills and attention to detail
                enable me to tackle complex challenges and deliver high-quality
                code.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
}

export default About;
