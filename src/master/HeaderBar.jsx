import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './../img/RHLogo.gif';
import './../../node_modules/bootstrap/dist/css/bootstrap.css'
import './HeaderBar.css'

class HeaderBar extends Component {
  
  constructor() {
    super();
    setTimeout(() => {
        window.scrollTo({ top: this.titleRef.getBoundingClientRect().y, behavior: "smooth" })
    }, 200);
  }

  render() {
    return (
      <div className="header-bar">
        <Navbar className="header-bar nav">
          <Col md={2} sm={12} className="header-link">
            <Link to="/" >About Me</Link>
          </Col>
          <Col md={2} sm={12} className="header-link">
            <Link to="/software" >My Software</Link>
          </Col>
          <Col md={2} sm={12} className="header-link">
            <Link to="/" >My Hardware</Link>
          </Col>
          <Col md={2} sm={12} className="header-link">
            <Link to="/" >My Writing</Link>
          </Col>
          <Col md={2} sm={12} className="header-link">
            <Link to="/" >How I Give Back</Link>
          </Col>
          <Col md={2} sm={12} className="header-link">
            <Link to="/" >Contact Me</Link>
          </Col>
        </Navbar>
        <Col md={12}>
          <h3 id="page-title" ref={titleRef => this.titleRef = titleRef}>
            {this.props.title}
          </h3>
          <img style={{ width: "100px" }} src={Logo} />
        </Col>
      </div>
    );
  }
}

export default HeaderBar;