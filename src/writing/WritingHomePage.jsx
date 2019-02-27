import React, { Component } from "react";
import HeaderBar from "./../master/HeaderBar";
import TravelCoverImage from "./../img/AirplaneMountains.jpg";
import FitnessCoverImage from "./../img/FinishLineMarathon.jpg";
import WritingCoverImage from "./../img/OfficeDesk.jpg";
import "./WritingHomePage.css";

class WritingHomePage extends Component {
    render() {
        return (
            <div>
                <HeaderBar title="JM Miller - Salaried Consultant" />
                <div className="image-menu">
                    <a href="/writing/travel" className="image-container col-md-4" style={{ float: "left" }}>
                        <span className="image-label" >Travel Writing</span>
                        <img src={TravelCoverImage} className="col-md-12" />
                    </a>
                    <a href="/writing/fitness" className="image-container col-md-4" style={{ float: "left" }}>
                        <span className="image-label" >Fitness Writing</span>
                        <img src={FitnessCoverImage} className="col-md-12" />
                    </a>
                    <a href="/writing/creative" className="image-container col-md-4" style={{ float: "left" }}>
                        <span className="image-label" >Creative Writing</span>
                        <img src={WritingCoverImage} className="col-md-12" />
                    </a>
                </div>
            </div>
        );
    }
}
export default WritingHomePage;