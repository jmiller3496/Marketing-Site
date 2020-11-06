import React from 'react';
import HeaderBar from '../shared/HeaderBar/HeaderBar';
import './SkillsPage.css';

function SkillsPage() {
    return (
        <>
            <HeaderBar title="JM Miller - Software Engineering Consultant" />
                <div className="page-contents-panel">
                    <h1>My Skillset</h1>
                    <div className="text-section">
                        <div className="col-md-8 offset-2" style={{ float: "left", width: "68%", margin: "0 16%" }}>
                            <p className="center">&nbsp;&nbsp;&nbsp;Find me on <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/JM-Miller">GitHub</a>!</p>
                            <hr />
                        </div>
                        <div className="skill-score-list">
                            <div>
                                <br />
                                <img src={`${process.env.PUBLIC_URL}/img/PluralSight/Angular.PNG`} alt="80th Percentile in Angular / 70th Percentile in CSS / 94th Percentile in HTML5" />
                                <br />
                                <br />
                                <div className="html-text-content-area">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Robert Half Technology, the Salaried Professional Services team I'm a part of has two main categories of assignments we deal with. The first being more traditional consulting work: starting and finishing a project and mapping out improvements our clients can make to increase revenue as we go.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The second kind being what we call "Staff-Aug," where we come into a client and act as an interim senior level developer to lighten the load as the permanent staff moves towards their other goals.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Two years into my position as a consultant with Robert Half, I got a chance to work with the wonderfully talented team of developers and entrepreneurs at Bezlio, a startup formed from Saber Logic in Akron Ohio. The majority of my work there was converting content on their eponymous web app from Bootstrap 3 to Angular material, while simultaneously migrating tools on their site to a new mobile application, via the Ionic Framework. Working with this tightly knit team was a pleasure and worth the drive in and of itself, but the opportunity to work at the genesis of a cross platform mobile app created with Angular and Ionic gave me a chance to start moving my development experience into a variety of platforms, that'd eventually land my work on display at <a href="/projects#deeplocal">CES 2019</a>.</p>
                                </div>
                                <hr />
                            </div>
                            <div>
                                <br />
                                <img src={`${process.env.PUBLIC_URL}/img/PluralSight/Csharp.PNG`} alt="91st Percentile in C# / 95th Percentile in ASP.NET MVC5" />
                                <br />
                                <br />
                                <div className="html-text-content-area">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The first time I starting writing software was when I was 8 years old, playing around with VBScript on a Win95 laptop over a family vacation, so it made sense that my first real world experience as a web developer would be in a Microsoft stack. From May of 2014 to January of 2016 I worked as a Web Developer for Slack Rock Safety in Medina, Ohio, an online retailer for fire-resistant clothing that would later be acquired by Ritz Safety, LLC. I worked on a small team of developers to rewrite and later maintain their online marketplace, including creating a warehouse management system that automated a large portion of their picking and shipping processes and automated PDF shipping label creation and printing via a Zebra printer.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Four years later, I would <a href="/projects#armstrong">revisit</a> ASP .NET and the MVC Framework, this time working with Armstrong Cable out of Butler, Pennsylvania, to rewrite portions of their administration toolset with .NET Core MVC 2. I used .NET MVC frequently with the clients I've worked with as a consultant at Robert Half, and understanding the thinking behind the MVC architecture so early in my career was instrumental to my competency later as a software engineer and architect.</p>
                                </div>
                                <hr />
                            </div>
                            <div>
                                <br />
                                <img src={`${process.env.PUBLIC_URL}/img/PluralSight/Git.PNG`} alt="65th Percentile in Git" />
                                <br />
                                <br />
                                <div className="html-text-content-area">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Although most of my work has been hosted through private repositories on Github, I’ve worked through Bitbucket and Microsoft’s Team Foundation Server as well. Coordinating teams of developers to solve problems and complete large-scale projects is an awesome thing, and the communication that platforms like Github allow make it much easier.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Being a software developer is fun, and likeminded people can get into hour-long conversations about some of the most seemingly monotonous things. More than just providing a common codebase, I’ve seen source control facilitate a sense of community.</p>
                                </div>
                                <hr />
                            </div>
                            <div>
                                <br />
                                <img src={`${process.env.PUBLIC_URL}/img/PluralSight/React.PNG`} alt="87th Percentile in JavaScript / 62nd Percentile in React" />
                                <br />
                                <br />
                                <div className="html-text-content-area">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Though I’ve worked in the React environment for a couple years now, I’ve only had the opportunity to use it in a professional capacity on a few of my consulting assignments. Fortunately, the largest of these assignments was a ton of fun.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was working with a client who was building a live display for a major player at the Consumer Electronics Show in January 2019, and they had given me a good amount of flexibility in the software structure I’d use. I chose to work in React for a few reasons. First, it was familiar to some of the other team members I was working beside. On top of that, React is a excellent library to rapidly prototype a flexible web app, which was crucial with the hard deadline set 3 months from when I was brought onto the project. Additionally, writing the backend of the application in NodeJS lightened the difficulty of switching between the pieces of our project, most of which being deployed on Raspberry Pi’s or Ubuntu machines.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In short, I love React. It’s often a pain to write code, especially when contributing to a debatably legacy project. I have yet to contribute to a MERN-stack project involving that I didn’t enjoy. In fact, this site was originally written in React. Anytime I get tired of writing code, making a fun project in a cool technology reminds me of why I started writing code in the first place –<br />Because I love it.</p>
                                </div>
                                <hr />
                            </div>
                            <div>
                                <br />
                                <img src={`${process.env.PUBLIC_URL}/img/PluralSight/Docker.PNG`} alt="81st Percentile in Docker / 74th Percentile in Python" />
                                <br />
                                <br />
                                <div className="html-text-content-area">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software development can be excruciating. Writing code to fix a project that someone else created and getting blamed for the issues that the fix reveals is an awful and unfortunately common thing. Beyond that, you are subject to a rapidly changing market landscape.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’ve had the opportunity to work in a lot of different languages and technologies, and I’ve had Robert Half actively encourages and rewards continual learning. I’ve had the chance to work with some awesome technologies on my own projects that have led to huge professional growth on numerous occasions.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Writing code in Python is fun and powerful, and my first interactions with the language at CES 2019 got me excited to start more projects. In my experience, it’s fairly intuitive and the community is vibrant and encouraging. “Tech that makes sense” is a wonderful thing, and Docker makes sense. The old norm of working in a separate VM per deploy seems crazy to me now. It’s another tech that I’ve learned in my spare time, whose potential gets the gears in my mind spinning.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m proud of my ability to learn, and of my drive to never stop. It’s just a bonus that tech in software engineering is always getting smarter, cooler, and more fun.</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default SkillsPage