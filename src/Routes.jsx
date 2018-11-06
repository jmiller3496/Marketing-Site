import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import { Col, Row, Navbar } from 'react-bootstrap'

class Routes extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={5}></Col>
                    <Col md={2}>
                        <Navbar>
                            <Link to="/home/" >Home</Link>
                            <Link to="/about/" >About</Link>
                            <Link to="/home/" >Home</Link>
                        </Navbar>
                    </Col>
                </Row>
                <Route path="/about" component={AboutPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/" exact component={HomePage} />
            </div>
        )
    }
}

export default Routes;