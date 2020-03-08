import React from "react";
import { Panel } from 'react-bootstrap';
import HeaderBar from './../shared/HeaderBar/HeaderBar';
import './IconAnimation.css';
import './TextAnimation.css';
import './HomePage.css';
import Book from './../img/BookIcon.svg';
import Gear from './../img/GearIcon.svg';
import Shovel from './../img/ShovelIcon.svg';
import Runner from './../img/RunnerIcon.svg';
import Airplane from './../img/AirplaneIcon.svg';
import BusinessPortrait from './../img/BusinessPortrait.jpg'

function HomePage () {
    return (
        <>
            <HeaderBar title="JM Miller - Software Engineering Consultant" />
            <Panel className="page-contents-panel" style={{ float: "left", width: "68%", margin: "0 16%" }}>
                <hr />
                <h4>Jonathan M Miller</h4>
                <h5> Senior Technical Consultant, Software Engineering </h5>
                <br />
                <div className="text-section">
                    <a href="/contact">
                        <div className="image-container image-container offset-sm-2 offset-lg-1 col-sm-8 col-lg-4" style={{ float: "left" }}>
                            <span className="image-label" style={{fontSize: "75%"}}>Contact me for your next project!</span>
                            <img className="" src={BusinessPortrait}></img>
                        </div>
                    </a>
                    <div className="description-verb-list col-lg-6 col-sm-12" style={{ float: "left", textAlign: "left" }}>
                        <hr />
                        <span style={{ position: "absolute", width: "100%" }}>I'm Jon</span>
                        <br />
                        <br />
                        <span style={{ position: "absolute", width: "100%" }} className="write-software">
                            <a href="/skills" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <span style={{ textAlign: "left", width: "100%" }}>I write software</span>
                                &nbsp;&nbsp;
                                <span className="UnderscoreIcon">&nbsp;</span>
                            </a>
                        </span>
                        <br />
                        <br />
                        <span style={{ position: "absolute", width: "100%" }} className="build-things">
                            <a href="/projects" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <span>I build things</span>
                                &nbsp;&nbsp;
                                <img className="GearIcon" src={Gear} />
                                <img className="LittleGearIcon" src={Gear} />
                            </a>
                        </span>
                        <br />
                        <br />
                        <span style={{ position: "absolute", width: "100%" }} className="volunteer">
                            <a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <span>I solve problems</span>
                                &nbsp;&nbsp;
                                <img className="ShovelIcon" src={Shovel} />
                                <span>
                                </span>
                            </a>
                        </span>
                        {/* <br />
                        <br />
                        <span style={{ position: "absolute", width: "100%" }} className="run-trails">
                            <a href="/writing/fitness" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <span>I run races</span>
                                &nbsp;&nbsp;
                                <span>
                                    <img className="RunnerIcon" src={Runner} />
                                </span>
                            </a>
                        </span>
                        <br />
                        <br />
                        <span style={{ position: "absolute", width: "100%" }} className="go-places">
                            <a href="/writing/travel" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <span>I go places</span>
                                &nbsp;&nbsp;
                                <span>
                                    <img className="AirplaneIcon" src={Airplane} />
                                </span>
                            </a>
                        </span>
                        <br />
                        <br />
                        <span style={{ position: "absolute", width: "100%" }} className="tell-stories">
                            <a href="/writing/stories" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <span>I tell stories</span>
                                &nbsp;&nbsp;
                                <span>
                                    <img className="BookIcon" src={Book} />
                                </span>
                                <br />
                            </a>
                        </span> */}
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <hr />
                    </div>
                    <div className="text-blurb " style={{ padding: "2%", float: "left" }} >
                        <br />
                        <p style={{ paddingLeft: "0%" }}>
                            <h5>Well, hello there!</h5>
                            If you're reading this, then there's a pretty good chance that either you know me and my work, or you might want to work with me in the future. Or maybe you're just an intrepid internet scuba diver at the end of a long trail of purple hyperlinks.
                        </p>
                        <p style={{ margin: "0%" }}>
                        </p>
                        <p style={{ margin: "0%" }}>
                            In any case, I'm glad you're here. I hope you'll stay a while and take a look at the work I've done, the places I've been, and the stories I've told.
                    </p>
                        <div className="hyperlink">
                            <a href="/contact" className="stylized-underline">
                                <div>
                                    <h6>- Contact Me -</h6>
                                    <hr className="stylized-underline" />
                                    <br />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </Panel>
        </>
    )
}

export default HomePage;