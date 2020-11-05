import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './HeaderBar.css'

function HeaderBar (props) {

  const titleRef = useRef(null);

  const locationParts = window.location.href.split('/');
  if (locationParts.length <= 4 && locationParts[3] === "") {
    setTimeout(() => {
      if(titleRef.current) {
        window.scrollTo({ top: titleRef.current.getBoundingClientRect().y, behavior: "smooth" })
      }
    }, 200);
  }

  return (
    <>
      <div className="header-bar nav">
        <Link to="/about" className="header-link col-md-3 col-sm-12" >
          <span>About Me</span>
        </Link>
        <Link to="/skills" className="header-link col-md-3 col-sm-12">
          <span>My Skillset</span>
        </Link>
        <Link to="/projects" className="header-link col-md-3 col-sm-12" >
          <span>My Projects</span>
        </Link>
        <Link to="/contact" className="header-link col-md-3 col-sm-12" >
          <span>Contact Me</span>
        </Link>
      </div>
      <div style={{width: "100%"}}>
        <br />
        <h3 id="page-title" ref={titleRef}>
          {props.title}
        </h3>
        <br />
      </div>
    </>
  );
}

export default HeaderBar;