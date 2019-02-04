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
                    <br/>
                    <p className="center">Find me on <a target="_blank" href="https://www.github.com/jmiller3496">GitHub</a>!</p>

                        <div className="skill-score-list">
                            <div>
                                <br/>
                                <img src={CSharpScore} />
                                <img src={ApsMvcScore} />
                                <br/>
                                <br/>
                                <br/>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I got started writing software by writing VBScript on a Win95 laptop when I was 8 years old, so it's
                                    only natural that my first real world experience as a web developer was in the Microsoft stack.
                                    From May of 2014 to January of 2016 I worked as a Web Developer for Slack Rock Safety in Medina, Ohio,
                                    an online retailer for fire-resistant clothing that would later be acquired by Ritz Safety, LLC.
                                    I worked on a small team of developers to rewrite and later maintain their online marketplace, including
                                    creating a warehouse management system that automated a large portion of their picking and shipping processes
                                    and automated PDF shipping label creation and printing via a Zebra printer.
                                </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Four years later, I would revisit ASP .NET and the MVC Framework, this time working with Armstrong Cable
                                    out of Butler, Pennsylvania, to rewrite portions of their administration toolset with .NET Core MVC 2. I
                                    used .NET MVC frequently with the clients I've worked with as a consultant at Robert Half, and understanding
                                    the thinking behind the MVC architecture so early in my career was instrumental to my competency later as a
                                    software engineer and architect.
                                </p>
                            </div>
                            <hr />
                            <div>
                                <br/>
                                <img src={AngularScore} />
                                <img src={CssScore} />
                                <img src={HtmlScore} />
                                <br/>
                                <br/>
                                <br/>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Robert Half Technology, the Salaried Professional Services team I'm a part of has two main categories of assignments
                                     we deal with. The first being more traditional consulting work: starting and finishing a project and mapping out
                                     improvements our clients can make to increase revenue as we go.
                                </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The second kind being what we call "Staff-Aug," where we come into a client and act as an interim senior level
                                    developer to lighten the load as the permanent staff moves towards their other goals.
                                </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Two years into my position as a consultant with Robert Half, I got a chance to work with the wonderfully talented
                                    team of developers and entrepreneurs at Bezlio, a startup formed from Saber Logic in Akron Ohio. The majority of
                                    my work there was converting content on their eponymous web app from Bootstrap 3 to Angular material, while simultaneously
                                    migrating tools on their site to a new mobile application, via the Ionic Framework. Working with this tightly knit team was
                                    a pleasure and worth the drive in and of itself, but the opportunity to work at the genesis of a cross platform mobile app
                                    created with Angular and Ionic gave me a chance to start moving my development experience into a variety of platforms, that'd
                                    eventually land my work on display at <a href="/writing/travel/ces2019">CES 2019</a>.
                                </p>
                            </div>
                            <hr />
                            <div>
                                <br/>
                                <img src={DevOpsScore} />
                                <br/>
                                <br/>
                                <br/>
                                <p>

                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I started my career earlier than most people and one of the benefits to working in consulting has been the wide berth
                                    of environments in which I’ve gotten to work. I often say that I’ve had anywhere from a suit-and-tie and
                                    company-issued-briefcase type office to a jeans-and-hoodie and company-issued GameCube controller type office.
                            </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On all the assignments I work on, my goal is not just to write code but also to develop business relationships and
                                    generally boost profits for my clients. Understanding business needs is crucial to this, and being able to communicate
                                    the reasons behind these needs is fundamental to the success of a project.
                            </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Often a client will give me flexibility to complete the solutions they need in whatever way I think best, and there have
                                    been several times where I’ve used that as a chance to build and lead a team of developers. has been one of my favorite
                                    parts of working as a consultant, and I pride myself in my abilities as a leader.

                            </p>
                            </div>
                            <hr />
                            <div>
                                <br/>
                                <img src={GitScore} />
                                <br/>
                                <br/>
                                <br/>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Although most of my work has been hosted through private repositories on Github, I’ve worked through Bitbucket
                                    and Microsoft’s Team Foundation Server as well. Coordinating teams of developers to solve problems and complete
                                    large-scale projects is an awesome thing, and the communication that platforms like Github allow make it much easier.
                            </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Being a software developer is fun, and likeminded people can get into hour-long conversations about some of the
                                    most seemingly monotonous things. More than just providing a common codebase, I’ve seen source control facilitate
                                    a sense of community.
                            </p>
                            </div>
                            <hr />
                            <div>
                                <br/>
                                <img src={ReactScore} />
                                <img src={JavaScriptScore} />
                                <br/>
                                <br/>
                                <br/>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Although I’ve worked in the React environment for a couple years now, I’ve only had the opportunity to
                                    use it in a professional capacity on one of my consulting assignments. Fortunately, the assignment I was
                                    working on was a ton of fun.
                            </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was working with a client who was building a live display for a major player at the Consumer Electronics
                                    Show in January 2019, and they had given me a good amount of flexibility in the software structure I’d use. I
                                    chose to work in React for a few reasons. First, it was familiar to some of the other team members I was working beside. On
                                    top of that, React is a excellent library to rapidly prototype a flexible web app, which was crucial with the hard deadline
                                    set 3 months from when I was brought onto the project. Additionally, writing the backend of the application in NodeJS
                                    lightened the difficulty of switching between the pieces of our project, most of which being deployed on Raspberry Pi’s or
                                    Ubuntu machines.
                            </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In short, I love React. It’s often a pain to write code, especially when contributing to a debatably legacy project. I have
                                    yet to contribute to a MERN-stack project involving that I didn’t enjoy. In fact, this site was originally written in React.
                                    Anytime I get tired of writing code, making a fun project in a cool technology reminds me of why I started writing code in
                                    the first place –
                            <br />
                                    Because I love it.
                            </p>

                            </div>
                            <hr />
                            <div>
                                <br/>
                                <img src={PythonScore} />
                                <img src={DockerScore} />
                                <br/>
                                <br/>
                                <br/>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software development is hard. Writing code to fix a project that someone else created and getting blamed for the issues
                                    that the fix reveals is an awful and unfortunately common thing. Beyond that, you are subject to a rapidly changing market
                                    landscape.
                            </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’ve had the opportunity to work in a lot of different languages and technologies, and I’ve had Robert Half actively
                                    encourages and rewards continual learning. I’ve had the chance to work with some awesome technologies on my own projects
                                    that have led to huge professional growth on numerous occasions.
                            </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Writing code in Python is fun and powerful, and my first interactions with the language at CES 2019 got me excited to
                                    start more projects. In my experience, it’s fairly intuitive and the community is vibrant and encouraging.
                                    “Tech that makes sense” is a wonderful thing, and Docker makes sense. The old norm of working in a separate VM per deploy
                                    seems crazy to me now. It’s another tech that I’ve learned in my spare time, whose potential gets the gears in my mind spinning.
                            </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m proud of my ability to learn, and of my drive to never stop. It’s just a bonus that tech in software engineering
                                    is always getting smarter, cooler, and more fun.

                            </p>
                            </div>
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default SoftwarePage