import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button, Col, Image, Grid } from 'react-bootstrap';
import HeaderBar  from './../master/Header'

class HomePage extends Component {
    render() {
        return (
            <div>
              <HeaderBar title="Home Page" />
                <p>--PLACEHOLDER-- </p>
                <Button bsStyle="warning">TEST</Button>
            </div>
        )
    }

}

export default HomePage;