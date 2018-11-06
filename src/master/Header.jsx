import React, { Component } from 'react';
import { Col, Row, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../../node_modules/bootstrap/dist/css/bootstrap.css'

class HeaderBar extends Component {

    render() {
        return (
            <Col className="header-bar" md={12}>
                <Row>
                    <Col md={5}></Col>
                    <Col md={2}>
                        <Row>
                            {/* <Navbar> */}
                            <Col md={4}>
                                <Link to="/home/" >Home</Link>
                            </Col>
                            <Col md={4}>
                                <Link to="/about/" >About</Link>
                            </Col>
                            <Col md={4}>
                                <Link to="/Scheduler/" >Scheduler</Link>
                            </Col>
                            {/* </Navbar> */}
                        </Row>
                    </Col>
                </Row>
                <h1> {this.props.title} </h1>
            </Col>
        );
    }
}

export default HeaderBar;