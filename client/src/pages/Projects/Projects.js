import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="container projects" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          hera are my top 3 recent projects with alive links and source code the
          latest version of hera and his documentation is available at https and
          https://github.com
        </p>

        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-badge">Full Stack</span>
                <img
                  src="https://ibpf.org/wp-content/uploads/2016/09/doctors-appointment-mental-health.png"
                  alt="project1"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Doctor Appointment System</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/fmc61/Doctor-Appointment-System"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-badge">Front-end</span>
                <img
                  src="https://img.utdstc.com/screen/54b/20f/54b20f5546a0fa287dbfaa5d79df95ebf94619592aa03ce6984ad87c8422bed8:600"
                  alt="project1"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">React</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Millionaire Quiz App Website
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/fmc61/Millionare-Quiz-App"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-badge">Full Stack</span>
                <img
                  src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">shopping Website</h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
