import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import SkillsPage from "./skills/SkillsPage";
import ContactPage from "./contact/ContactPage";
import ProjectsPage from "./projects/ProjectsPage";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/home" component={HomePage} />
                <Route path="/about" component={HomePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/skills" component={SkillsPage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/" exact component={HomePage} />
            </div>
        )
    }
}

export default Routes;