import React from "react";
import './LoadingGraphic.css';
import Gear from './../../img/GearIcon.svg';

function LoadingGraphic() {
    return (
        <>
            <div className="page-contents-panel" style={{ float: "left", width: "68%", margin: "0 16%" }}>
                <h2 className="fake-tag">&lt; Loading /&gt;</h2>
                <br />
                <div className="text-section UnderConstruction">
                    <img alt="Animated Gear Icon" className="GearIcon" src={Gear} />
                    <img alt="Animated Gear Icon" className="LittleGearIcon" src={Gear} />
                    <br />
                    <br />
                    <br />
                    <p className="center">Fetching up-to-date page content...</p>
                </div>
            </div>
        </>
    );
}

export default LoadingGraphic;