import React, { Component } from 'react';
import { Col, Row, Navbar, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class HeaderBar extends Component {

    render() {
        return (
            <Col className="header-bar" md={12}>
                <Row>
                    <Col md={5}></Col>
                    <Col md={2}>
                        <Navbar>
                            <Link to="/home/" >Home</Link>
                            <Link to="/about/" >About</Link>
                        </Navbar>
                    </Col>
                </Row>
                <h1> {this.props.title} </h1>
            </Col>
        );
    }
}

export default HeaderBar;