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

class SoftwarePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderBar title="JM Miller - Salaried Consultant" />
                <Panel className="page-contents-panel" style={{ float: "left", width: "66%", margin: "0 16%" }}>
                    <hr />
                    <div className="text-section">
                        <ul style={{listStyle: 'none'}}>
                            <li style={{float:'left', width: '300px', height: '350p', padding: '1px'}}><img src={AngularScore} /></li>
                            <li style={{float:'left', width: '300px', height: '350p', padding: '1px'}}><img src={CSharpScore} /></li>
                            <li style={{float:'left', width: '300px', height: '350p', padding: '1px'}}><img src={CssScore} /></li>
                            <li style={{float:'left', width: '300px', height: '350p', padding: '1px'}}><img src={DevOpsScore} /></li>
                            <li style={{float:'left', width: '300px', height: '350p', padding: '1px'}}><img src={DockerScore} /></li>
                            <li style={{float:'left', width: '300px', height: '350p', padding: '1px'}}><img src={GitScore} /></li>
                            <li style={{float:'left', width: '300px', height: '350p', padding: '1px'}}><img src={HtmlScore} /></li>
                            <li style={{float:'left', width: '300px', height: '350p', padding: '1px'}}><img src={JavaScriptScore} /></li>
                            <li style={{float:'left', width: '300px', height: '350p', padding: '1px'}}><img src={ApsMvcScore} /></li>
                            <li style={{float:'left', width: '300px', height: '350p', padding: '1px'}}><img src={PythonScore} /></li>
                            <li style={{float:'right', width: '300px', height: '350p', padding: '1px'}}><img src={ReactScore} /></li>
                        </ul>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default SoftwarePage