import React from "react";
import { Panel } from 'react-bootstrap';
import HeaderBar from '../shared/HeaderBar/HeaderBar';
import './UnderConstructionPage.css';
import Gear from './../img/GearIcon.svg';

function UnderConstructionPage() {
    return (
        <>
            <HeaderBar title="JM Miller - Software Engineering Consultant" />
            <Panel className="page-contents-panel" style={{ float: "left", width: "68%", margin: "0 16%" }}>
                <hr />
                <h2 className="fake-tag">&lt; UnderConstruction /&gt;</h2>
                <br />
                <div className="text-section UnderConstruction">
                    <img className="GearIcon" src={Gear} />
                    <img className="LittleGearIcon" src={Gear} />
                    <br />
                    <br />
                    <hr style={{ width: "75%" }} />
                    <br />
                    <p className="center">Try back a bit later. I'm still in the middle of documenting this!</p>
                </div>
            </Panel>
        </>
    );
}

export default UnderConstructionPage;