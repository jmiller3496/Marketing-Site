import React, { Component } from "react";
import HeaderBar from './../master/HeaderBar'
import DaySchedule from './DaySchedule';
import { PanelGroup, Row, Col, Grid, Modal, Button } from 'react-bootstrap';
import { GetSchedulerData } from "./../helpers/RestHelper";

class SchedulerPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleModalShow = this.handleModalShow.bind(this);
    this.state = {
      activeKey: 1,
      show: false,
      modalTitle: "",
      
    };
  }

  dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



  componentWillMount() {
    this.setState({
    });
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  handleModalShow(dayKey) {
    this.getDaySchedule();
    this.setState({ show: true, modalTitle: this.dayNames[dayKey] });
  }

  getDaySchedule(){
      GetSchedulerData().then(data => {
        this.setState({
          apiRepsonse: data
        })
        console.log(data);
      return data;
    });
  }

  renderDays = () => {
    var days = [];
    let today = new Date();
    let dayOfWeek = today.getDay();
    for (var i = dayOfWeek; i < 8; i++) {
      if (i === 7) {
        days.push(
          <Col key={i} className="col-md">
            <DaySchedule eventKey={0} dayName={this.dayNames[0]} showModal={this.handleModalShow} />
          </Col>
        );
      }
      else {

        days.push(
          <Col key={i} className="col-md">
            <DaySchedule eventKey={i} dayName={this.dayNames[i]} showModal={this.handleModalShow} />
          </Col>
        );
      }
    }
    return days;
  }

  render() {
    return (
      <div>
        <HeaderBar title="Scheduler" />
        <PanelGroup id="1" activeKey={this.state.activeKey} className="week-group" onSelect={this.handleSelect}>
          <Grid fluid>
            <Row className="full-row" width="100%">
              {this.renderDays()}
            </Row>
          </Grid>
        </PanelGroup>

        <Modal className={this.state.show ? "show" : ""} name="Scheduler" show={this.state.show} >
          <Modal.Header>
            <Modal.Title>{this.state.modalTitle}</Modal.Title>
          </Modal.Header>

          <Modal.Body><h4>{this.state.apiRepsonse}</h4></Modal.Body>

          <Modal.Footer>
            <Button onClick={() => { this.setState({ show: false }) }}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer></Modal>
      </div>
    );
  }
}

export default SchedulerPage;