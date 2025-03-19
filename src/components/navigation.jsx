import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            aria-label="Go to top"
          >
            <img
              src="img/Papl_logo.webp"
              alt="Company Logo"
              className="img-responsive"
              style={{
                height: "60px",
                width: "auto",
                marginTop: "-13px", // Corrected camelCase and removed the extra semicolon
                marginLeft: "20px", // Corrected camelCase and removed the extra semicolon
                objectFit: "contain",
              }}
            />
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About us
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Our Offerings
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Partners
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Resources
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
