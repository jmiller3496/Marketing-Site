import React, { Component } from 'react';
import HeaderBar from '../shared/HeaderBar/HeaderBar';
import LoadingGraphic from '../shared/LoadingGraphic/LoadingGraphic';
import { Panel } from 'react-bootstrap';
import ArmstrongLogo from '../img/Clients/armstrong.jpeg';
import AultcareLogo from '../img/Clients/aultcare.png';
import BezlioLogo from '../img/Clients/bezlio.png';
import DeeplocalLogo from '../img/Clients/deeplocal.png';
import DeloitteLogo from '../img/Clients/deloitte.svg';
import EVRLogo from '../img/Clients/evr.png';
import FuturiLogo from '../img/Clients/futuri.png';
import GLILogo from '../img/Clients/gli.png';
import SRSLogo from '../img/Clients/slaterocksafety.jpg';
import './ProjectsPage.css';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { contents: [], loading: true }

        //This loading screen is completely fake (until I decide to move these to Mongo or SQL)
        setTimeout(() => {
            this.setState({ contents: [], loading: false });
        }, 2500);
    }

    render() {
        return (
            <>
                <HeaderBar title="JM Miller - Software Engineering Consultant" />
                {this.state.loading &&
                    <LoadingGraphic />
                }
                {!this.state.loading &&
                    <Panel className="page-contents-panel">
                        <br/>
                        <h1>My Previous Projects and Clients</h1>
                        <div className="text-section">
                            <div className="project-list col-md-8 offset-2" style={{ float: "left", width: "68%", margin: "0 16%" }}>
                                <hr />
                                <a href="https://www2.deloitte.com/us/en.html">
                                    <br/><img style={{maxWidth:"150px"}} src={DeloitteLogo} alt="Deloitte" /> <br/> <br/> 
                                </a><a href="https://www2.deloitte.com/us/en.html"><h2>THREAT INTELLEGENCE ANALYTICS, DELOITTE</h2></a>
                                <br/>
                                <h4>CyArc Threat Hunt UI</h4>
                                <p>
                                    Contributed improvements, bug resolutions, and expansions to a new application intended to act as a hub for Threat Intelligence, Reporting, Alert Management, and Service Requests</p>
                                <p><i>Node, VueJS, Python, Flask</i></p>
                                <h4>Deloitte Fusion Portal UI  </h4>
                                <p>
                                    Architected and developed a custom UI to streamline processes for Cyber Analytics' employee to find, report, share, and communicate potential threats and malicious activity to their peers and clients
                                </p>
                                <p><i>Node, React, ArangoDB, Keylines (ReGraph) for Data Visualization</i></p>
                                <hr />
                                <a href="https://futurimedia.com/">
                                    <br/><img style={{maxWidth:"150px"}} src={FuturiLogo} alt="Futuri Media" /> <br/> <br/> 
                                </a>
                                <a href="https://futurimedia.com/"><h2>FUTURI MEDIA</h2></a>
                                <br/>
                                <h4>TopLine UI</h4>
                                <p>
                                    Created several functional web pages based on provided design documents and resolved User Interface error and optimized User Experience in existing pages based on end users’ feedback
                                </p>
                                <p><i>VueJS, Node, PHP</i></p>
                                <h4>TopicPulse Mobile</h4>
                                <p>Created several mobile application view to mimic design and functionality of an existing web application</p>
                                <p><i>React Native, Node</i></p>
                                <hr />
                                <a href="https://www.engagevirtualrange.com/">
                                    <br/><img style={{maxWidth:"150px"}} src={EVRLogo} alt="Engage Virtual Reality" /> <br/> <br/> 
                                </a>
                                <a href="https://www.engagevirtualrange.com/"><h2>ENGAGE VIRTUAL RANGE</h2></a><br/>
                                <h4>Course of Fire</h4>
                                <p>Created a custom application to generate and run customizable shooting range courses from a web API, utilizing a laser-equipped practice gun and short-throw projector for real-world practice within a virtual shooting range</p>
                                <p><i>Unity3D, C#</i></p>
                                <h4>Azure AI Screen Analysis Scoring</h4>
                                <p>Implemented Microsoft Azure Image processing AI to capture, read, and submit Scores from a variety of 3rd party Virtual Shooting range applications</p>
                                <p><i>C#, Azure AI Image Processing </i></p>
                                <hr />
                                <a href="https://www.deeplocal.com/">
                                    <br/><img style={{maxWidth:"150px"}} src={DeeplocalLogo} alt="Deeplocal" /> <br/> <br/> 
                                </a>
                                <a href="https://www.deeplocal.com/"><h2 id="deeplocal">CES 2019, DEEPLOCAL</h2></a><br/>
                                <h4>Control Panel</h4>
                                <p>
                                    The front-end application would be used as a Control Panel for all Node.js applications listed below. The application would be accessible from a locally hosted WiFi network via a mobile or desktop web browser.
                                    The application would provide visual cues to sensors being tripped and objects being active, with configurable update timing delays to ensure enough time to differentiate statuses.
                                    Additionally, the application would provide text inputs to manually specify statuses to be sent to and set within any connected object or service.
                                The application would read in real-time any registered objects, sensors, Pi Hubs, or external services, with in-memory logic to prevent any bottle-necking. </p>
                                <p><i>React.js, Node.js, Express.js </i></p>
                                <h4>Backend API</h4>
                                <p>An Express Application would parse a JSON configuration file that would contain many string ID’s of Object IR Broadcasters and IR Sensors. The application would listen for HTTP requests to notify the Control Panel of tripped sensors and active / inactive objects.
                                    Upon notification of sensors being tripped, commands to activate displays would be sent to a series of objects using either of the above HTTP Router or a direct Socket Connection, with the Objects to be activated specified in the aforementioned JSON file.
                                    Additionally, the application would allow manual override commands to be issued via the Control Panel to be sent via the appropriate service to the specified Object.
                                </p>
                                <p><i>Node.JS, Express.js, Webpack, Socket Connections</i></p>
                                <h4>HTTP Router</h4>
                                <p>
                                    An Express Application would listen for HTTP GET requests sent from the Backend API, process them using simple parameters provided by a vendor for the client, then make HTTP POST Requests to specified external endpoints, with the processed data.
                                    Upon receiving response request, the application would send a request to the backend API with the status of the vendor’s software.
                                </p>
                                <p><i>Node.js, Express.js, Webpack, Axios </i></p>
                                <h4>Sensor Triggered Media Player</h4>
                                <p>
                                    When notified by an Object’s IR Receiver that a Sensor has tripped via USB Serial, a script would run to begin playing a video file via Google Chrome.
                                    Upon the next sensor being tripped, the application would fade out the audio on the current video file in Chrome, delay for a configurable duration, then start the video for the ID of the tripped sensor.
                                </p>
                                <p><i>Node.js, JavaScript ES6, Serial-Port, Ubuntu Shell, Google Chrome </i></p>
                                <hr />
                                <a href="https://armstrongonewire.com/">
                                    <br/><img style={{maxWidth:"150px"}} src={ArmstrongLogo} alt="Armstrong OneWire" /> <br/> <br/> 
                                </a>
                                <a href="https://armstrongonewire.com/"><h2>ARMSTRONG CABLE</h2></a><br/>
                                <h4>Workday Integration </h4>
                                <p>
                                    Created a scheduled task to automatically read CSV files from a server location, parse them into a SQL table, perform a few data manipulation operations on them, then output them into an XLSX template with labeled fields for each column, which was provided by WorkDay
                                    <br />
                                    Users from different child companies within the Armstrong Group of Companies will take the time logged from their employees, output it into an XLSX or CSV file, and place it on the server I set up.
                                    <br />
                                    The end user can configure a CSV file that has the name of the input column number or column header and the data field to which it maps.
                                    <br />
                                    The process runs once weekly and creates a XLSX file that is in a format that WorkDay can accept and is uploaded to WorkDay’s system to execute their payroll functions.
                                </p>
                                <p><i>C#, .NET Core 2.1, OpenXML, MS SQL Server </i></p>
                                <h4>ICOMS CM Web Administrator Portal: </h4>
                                <p>
                                    Revamped and rewrote an internal UI to add / edit / remove options for product bundles, promotions, and types of service for all of Armstrong Cable’s administrators.
                                    This application ties into the existing SQL database that is used across most Armstrong Cable’s internal applications.
                                </p>
                                <p><i>ASP.NET MVC, C#, Entity Framework Database First</i></p>
                                <hr />
                                <a href="https://bezl.io/">
                                    <br/><img style={{maxWidth:"150px"}} src={BezlioLogo} alt="Bezlio" /> <br/> <br/> 
                                </a>
                                <a href="https://bezl.io/"><h2>BEZLIO</h2></a><br/>
                                <h4>Data Broker Web Platform Update: </h4>
                                <p>
                                    Created an installable service that sits on a data server, that allows data to be aggregated from any source, and served up to a user instantly, on any browser or device, in real time, while still maintaining a high level of security, also allowing writing data back to the server/source.
                                Upgraded legacy technologies and resolved errors within the existing web platform.
                                </p>
                                <p><i>Angular 4, TypeScript, Bootstrap (converted to) Angular Material, SCSS </i></p>
                                <h4>Data Broker Mobile App: </h4>
                                <p>
                                    Assisted with the development of a new mobile application to extend the functionality of the Web Platform version with additional uses from the Ionic Framework and Cordova.
                                    <br />
                                    Developed the My Accounts Page
                                    <br />
                                    <br />
                                    Wired up the Password Reset Page
                                    <br />
                                    Created an Error Notification Service Provider
                                    <br />
                                    Created Filtering UI and functionality for users with multiple roles </p>
                                <p><i>Angular 4, Ionic Framework, Cordova, TypeScript, SCSS </i></p>
                                <hr />
                                <a href="http://www.gll.com/">
                                    <br/><img style={{maxWidth:"150px"}} src={GLILogo} alt="GLI" /> <br/> <br/> 
                                </a>
                                <a href="http://www.gll.com/"><h2>GREAT LAKES INTEGRATED</h2></a><br/>
                                <h4>GLI WMS/OMS V2</h4>
                                <p>
                                    Architected new Order and Warehouse Management Systems utilizing Agile Methodology and leading a small team of developers.
                                </p>
                                <p><i>C#.NET, ASP.NET MVC, SQL, Entity Framework, VeraCore Order Fulfillment, Web Services, Razor, XML, WSDL, Bootstrap, CSS3, HTML </i></p>
                                <h4>GLI WMS/OMS V1</h4>
                                <p>Maintained an existing Order Management and Fulfillment System, including adding features and bug fixes.</p>
                                <p><i>C#.NET, ASP.NET Web Forms, SQL Server </i></p>
                                <hr />
                                <a href="https://www.aultcare.com/">
                                    <br/><img style={{maxWidth:"150px"}} src={AultcareLogo} alt="Aultcare" /> <br/> <br/> 
                                </a>
                                <a href="https://www.aultcare.com/"><h2>AULTCARE, AULTMAN HOSPITAL</h2></a><br/>
                                <h4>COBA/MSP File Transfer: </h4>
                                <p>
                                    Created a web application to process legacy insurance data, pull current data and output an updated data file, formatted per the specifications of the US Center for Medicare Services data file import.
                                </p>
                                <p><i>ASP.NET, C#, MS SQL 2008 R2 </i></p>
                                <h4>Part C Reporting Interface</h4>
                                <p>
                                    Created and integrated a tool to report on individuals with insurance categorized as “Part C Coverage”, allowing dynamic filtering and inline data population, as well as Excel file exports and downloads.
                                </p>
                                <p><i>ASP.NET, jQueryUI, OpenXML </i></p>
                                <h4>HRM Insurance Claims Report</h4>
                                <p>
                                    Created and deployed an SSRS report on an existing report server, to display insured individuals with HRA coverage
                                </p>
                                <p><i>MS SQL 2008 R2, SSRS </i></p>
                                <hr />
                                <a href="https://www.slaterocksafety.com/">
                                    <br/><img style={{maxWidth:"150px"}} src={SRSLogo} alt="Slate Rock Safety" /> <br/> <br/> 
                                </a>
                                <a href="https://www.slaterocksafety.com/"><h2>SLATE ROCK SAFETY</h2></a><br/>
                                <h4>Original E-Commerce Site</h4>
                                <p>
                                    Participated in the development of various facets of an E-Commerce retailer’s website and administrative system. Developed a product catalog, user shopping cart, account creation portal, login credentials functionality, and a UI template
                                </p>
                                <p><i>VB.NET, ASP.NET, SQL, JavaScript, jQuery, CSS, XHTML </i></p>
                                <h4>Rewritten E-Commerce Site</h4>
                                <p>
                                    Created and implemented a Content Management System for the E-Commerce client-facing site including a WYSIWYG editor for product listings. Created and implemented a Warehouse Management System, including barcode generation, printing, and scanning for tracking and shipping inventory.
                                </p>
                                <p><i>C#.NET, ASP.NET MVC 3, SQL SCSS, CSS3, HTML5, Entity Framework, jQuery</i></p>
                            </div>
                        </div>
                    </Panel>
                }
            </>
        );
    }
}

export default ProjectsPage