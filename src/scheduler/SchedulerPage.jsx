import React, { Component } from "react";
import HeaderBar from './../master/Header'
import { Panel, PanelGroup, Button } from 'react-bootstrap'
import './../../node_modules/bootstrap/dist/css/bootstrap.css' 

class SchedulerPage extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: true
        };
      }
    
      render() {
        return (
          <div>
            <HeaderBar title="Scheduler" />
            <PanelGroup className="week-group">
              <Panel className="Monday" defaultExpanded={false}>
                <Panel.Heading>
                  <Panel.Title toggle>Monday</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                  <div>
                    --PLACEHOLDER--
                  </div>
                </Panel.Body>
              </Panel>
            </PanelGroup>
          </div>
        );
      }
    }

export default SchedulerPage;