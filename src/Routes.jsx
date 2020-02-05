import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import SkillsPage from "./skills/SkillsPage";
import ConstructionPage from "./construction/UnderConstructionPage";
import ContactPage from "./contact/ContactPage";
import GiveBackPage from "./give/GiveBackPage";
import WritingHomePage from "./writing/WritingHomePage";
import FitnessWritingPage from "./writing/fitness/FitnessWritingPage";
import TravelWritingPage from "./writing/travel/TravelWritingPage";
import CreativeWritingPage from "./writing/creative/CreativeWritingPage";
import ProjectsPage from "./projects/ProjectsPage";

class Routes extends Component {
    render() {
        return (
            <div>
                {/* <Route path="/give" component={ConstructionPage} /> */}
                <Route path="/home" component={HomePage} />
                <Route path="/about" component={HomePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/skills" component={SkillsPage} />
                <Route path="/projects" component={ProjectsPage} />
                {/* <Route path="/writing" exact component={WritingHomePage} />
                <Route path="/writing/fitness" component={ConstructionPage} />
                <Route path="/writing/travel" component={ConstructionPage} />
                <Route path="/writing/creative" component={ConstructionPage} /> */}
                {/* <Route path="/writing/fitness" component={FitnessWritingPage} />
                <Route path="/writing/travel" component={TravelWritingPage} />
                <Route path="/writing/creative" component={CreativeWritingPage} /> */}
                <Route path="/" exact component={HomePage} />
            </div>
        )
    }
}

export default Routes;