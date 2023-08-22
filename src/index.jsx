import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Profile from "./profile.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function Resume() {
  return (
        <div id="page-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Muhammad Waqas</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={Profile} alt="..." /></span>
            </a>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                </ul>
            </div>
        </nav>
        <div className="container-fluid p-0">
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Muhammad
                        <span className="text-primary">Waqas</span>
                    </h1>
                    <div className="subheading mb-5">
                        · 03102604311 ·
                        <a href="mailto:wm66179@gmail.com">waqas@gmail.com</a>
                    </div>
                    <p className="lead mb-5">MERN Stack Developer with a Passion for Creating Beautiful Web & Mobile Apps.</p>
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Preview Officer</h3>
                            <div className="subheading mb-3">Madani Channel</div>
                            <p>I meticulously review videos and news content to ensure their quality and accuracy before onair, contributing to the seamless delivery of reliable information to viewers.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">November 2020 - Present</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Govt. Superior Commerce College</h3>
                            <div className="subheading mb-3">Inter in Commerce</div>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Govt. Boys Secondary School</h3>
                            <div className="subheading mb-3">Metric in Science</div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            HTML5
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            CSS3
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Bootstrap
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Firebase database
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Nodejs
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Express
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Mongodb
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Reactjs
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        </div>
  );
}

ReactDOM.render(<Resume />, document.querySelector("#root"));


