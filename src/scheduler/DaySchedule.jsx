import React, { Component } from "react";
import { Panel, Button } from "react-bootstrap";
import './../../node_modules/bootstrap/dist/css/bootstrap.css';


class DaySchedule extends Component {

    render() {
        return (
            <Panel bsStyle="primary">
                <Panel.Heading bsStyle="primary">
                    <Panel.Title>{this.props.dayName}</Panel.Title>
                </Panel.Heading>
                <Panel.Body bsStyle="primary">
                    <div>
                        <Button bsStyle="primary" onClick={(key) => { this.props.showModal(this.props.eventKey) }}>Schedule</Button>
                    </div>
                </Panel.Body>
            </Panel>
        );
    }
}

export default DaySchedule;