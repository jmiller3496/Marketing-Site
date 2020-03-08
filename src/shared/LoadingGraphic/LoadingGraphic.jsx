import React from "react";
import { Panel } from 'react-bootstrap';
import './LoadingGraphic.css';
import Gear from './../../img/GearIcon.svg';

function LoadingGraphic() {
    return (
        <>
            <Panel className="page-contents-panel" style={{ float: "left", width: "68%", margin: "0 16%" }}>
                <h2 className="fake-tag">&lt; Loading /&gt;</h2>
                <br />
                <div className="text-section UnderConstruction">
                    <img className="GearIcon" src={Gear} />
                    <img className="LittleGearIcon" src={Gear} />
                    <br />
                    <br />
                    <br />
                    <p className="center">Fetching up-to-date page content...</p>
                </div>
            </Panel>
        </>
    );
}

export default LoadingGraphic;