import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button, Col, Image, Grid } from 'react-bootstrap';
import LandscapeImage from './../resources/landscape.jpg'
import {Parallax} from 'react-scroll-parallax'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Col md={12}>
                <div  className="header">
                    <h1>Home Page</h1>
                    <p>--PLACEHOLDER-- </p>
                    <Button bsStyle="warning">TEST</Button>
                    </div>
                </Col>
                <Col md={12} fluid={true}>
                </Col>
            </div>
        )
    }

}

export default HomePage;