import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import SkillsPage from "./skills/SkillsPage";
import ContactPage from "./contact/ContactPage";
import ProjectsPage from "./projects/ProjectsPage";
import ErrorPage from "./error/ErrorPage";

function Routes() {
    return (
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/" exact component={HomePage} />
            <Route component={ErrorPage} />
        </Switch>
    );
}

export default Routes;