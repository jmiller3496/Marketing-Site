import React from "react";
import HeaderBar from './../shared/HeaderBar/HeaderBar';
import Gear from './../img/GearIcon.svg';
import './ErrorPage.css';

function ErrorPage() {
    return (
        <>
            <HeaderBar title="JM Miller - Software Engineering Consultant" />
            <div className="page-contents-panel" style={{ float: "left", width: "68%", margin: "0 16%" }}>
                <h2 className="fake-tag">&lt; Error /&gt;</h2>
                <br />
                <div className="text-section UnderConstruction">
                    <img alt="Animated Gear Icon" className="GearIcon" src={Gear} />
                    <img alt="Animated Gear Icon" className="LittleGearIcon" src={Gear} />
                    <br />
                    <br />
                    <br />
                    <h3>Oh no!</h3>
                    <p className="center">Something went wrong! Please try again later!</p>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;