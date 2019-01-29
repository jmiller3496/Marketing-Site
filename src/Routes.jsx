import React, { Component } from "react";
import { Route } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import SoftwarePage from "./software/SoftwarePage";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/about" component={AboutPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/software" component={SoftwarePage} />
                <Route path="/" exact component={HomePage} />
            </div>
        )
    }
}

export default Routes;