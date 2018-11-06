import React, { Component } from "react";
import { Route } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import SchedulerPage from "./scheduler/SchedulerPage"
import './../node_modules/bootstrap/dist/css/bootstrap.css' 

class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/about" component={AboutPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/Scheduler" component={SchedulerPage} />
                <Route path="/" exact component={HomePage} />
            </div>
        )
    }
}

export default Routes;