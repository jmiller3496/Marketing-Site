import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import SoftwarePage from "./software/SoftwarePage";
import ConstructionPage from "./construction/UnderConstructionPage";
import ContactPage from "./contact/ContactPage";
import GiveBackPage from "./give/GiveBackPage";
import WritingHomePage from "./writing/WritingHomePage";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/give" component={ConstructionPage} />
                <Route path="/about" component={HomePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/software" component={SoftwarePage} />
                <Route path="/hardware" component={ConstructionPage} />
                <Route path="/writing" component={WritingHomePage} />
                <Route path="/" exact component={HomePage} />
            </div>
        )
    }
}

export default Routes;