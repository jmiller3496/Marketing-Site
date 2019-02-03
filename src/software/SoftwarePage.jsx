import React, { Component } from 'react';
import HeaderBar from './../master/HeaderBar';
import { Panel } from 'react-bootstrap';
import AngularScore from "./../img/PluralSight/Angular.PNG";
import CSharpScore from "./../img/PluralSight/Csharp.PNG";
import CssScore from "./../img/PluralSight/CSS.PNG";
import DevOpsScore from "./../img/PluralSight/DevOps.PNG";
import DockerScore from "./../img/PluralSight/Docker.PNG";
import GitScore from "./../img/PluralSight/Git.PNG";
import HtmlScore from "./../img/PluralSight/HTML5.PNG";
import JavaScriptScore from "./../img/PluralSight/JS.PNG";
import ApsMvcScore from "./../img/PluralSight/MVC.PNG";
import PythonScore from "./../img/PluralSight/Python.PNG";
import ReactScore from "./../img/PluralSight/React.PNG";
import './SoftwarePage.css';

class SoftwarePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderBar title="JM Miller - Salaried Consultant" />
                <Panel className="page-contents-panel">
                    <hr />
                    <div className="text-section">
                        <div className="skill-score-list">

                            <div>
                                <img src={AngularScore} />
                                <img src={CssScore} />
                                <img src={HtmlScore} />

                                <p>
                                    At Robert Half Technology, the Salaried Professional Services team out I'm a part of has two main categories of assignments we deal with.
                                    The first being more traditional consulting work: starting and finishing a project and mapping out imporvements our clients can make to
                                    increase revenue as we go.
                                    <br />
                                    The second kind being what we call "Staff-Aug," where we come into a client and act as an interim senior level developer to lighten the
                                    load as the permant staff moves towards their other goals.
                                    <br />
                                    Two years into my position as a conultant with Robert Half, I got a chance to work with the
                                    wonderfully talented team of developers and entreprenuers at Bezlio, a startup formed from Saber Logic in Akron Ohio.
                                    The majority of my work there was converting content on their epononymous web app from Bootstrap 3 to Angular material, while simultaineously
                                    migrating tools on their site to a new mobile application, via the Ionic Framework.
                                    <br />
                                    Working with this tightly knit team was a pleasure and worth the drive in and of itself, but the opportunity to work at the genesis of a cross platform
                                    mobile app created with Angular and Ionic gave me a chance to start moving my development experience into a variety of platforms, that'd eventually land my
                                    work on display at <a href="/writing/travel/ces">CES 2019</a>.
                                </p>
                            </div>

                            <img src={DevOpsScore} />
                            <img src={DockerScore} />
                            <img src={GitScore} />

                            <img src={ReactScore} />
                            <img src={JavaScriptScore} />

                            <img src={PythonScore} />

                            <div>
                                <img src={CSharpScore} />
                                <img src={ApsMvcScore} />

                                <p>
                                    I got started writing software by writing VBScript on a Win95 laptop when I was 8 years old,
                                    so it's only natural that my first real world experience as a web developer was in the Microsoft stack.
                                    From --Month/year-- to --month/year-- I worked as a Web Developer for Slack Rock Safety in Medina, Ohio, an
                                    online retailer for fire-resistant clothing that would later be acquired by Ritz Safety, LLC.
                                <br />
                                    I worked on a small team of developers to rewrite and later maintain their online marketplace, including creating
                                    a warehouse management system that automated a large portion of their picking and shipping processes and automated
                                    PDF shipping label creation and printing via a Zebra printer.
                                </p>
                                <p>
                                    Four years later, I would revisit ASP .NET and the MVC Framework, this time working with Armstrong Cable out of Butler, Pennsylvania,
                                    to rewrite portions of their administration toolset with .NET Core MVC 2. I used .NET MVC frequently with the clients I've worked with as
                                    a consultant at Robert Half, and understanding the thinking behind the MVC architecture so early in my career was instrumental to
                                    my competency later as a software engineer and architect.
                                </p>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default SoftwarePage