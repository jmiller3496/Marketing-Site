import React, { Component } from "react";
import { Button, Panel } from 'react-bootstrap';
import HeaderBar from './../master/Header'
import './../../node_modules/bootstrap/dist/css/bootstrap.css' 

class HomePage extends Component {
    render() {
        return (
            <div>
                <HeaderBar title="Home Page" />
                <Panel className="page-contents-panel">
                    <p>--PLACEHOLDER-- </p>
                    <Button bsStyle="warning">TEST</Button>
                </Panel>
            </div>
        )
    }

}

export default HomePage;