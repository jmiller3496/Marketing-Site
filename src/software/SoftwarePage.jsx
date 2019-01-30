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
                <Panel className="page-contents-panel" style={{ }}>
                    <hr />
                    <div className="text-section">
                        <div className="skill-score-list" style={{listStyle: 'none'}}>
                            <img src={AngularScore} />
                            <img src={CSharpScore} />
                            <img src={CssScore} />
                            <img src={DevOpsScore} />
                            <img src={DockerScore} />
                            <img src={GitScore} />
                            <img src={HtmlScore} />
                            <img src={JavaScriptScore} />
                            <img src={ApsMvcScore} />
                            <img src={PythonScore} />
                            <img src={ReactScore} />
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default SoftwarePage