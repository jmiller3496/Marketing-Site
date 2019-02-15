import React, { Component } from 'react';
import HeaderBar from './../master/HeaderBar';
import { Panel } from 'react-bootstrap';
import { GetArticles } from './../helpers/RestHelper';
import './SoftwarePage.css';

class SoftwarePage extends Component {
    constructor(props) {
        super(props);
        this.state = { contents: [] }

        GetArticles(5).then((value) => {
            this.setState({ contents: value.recordset });
        });
    }

    render() {
        return (
            <div>
                <HeaderBar title="JM Miller - Salaried Consultant" />
                <Panel className="page-contents-panel">
                    <hr />
                    <div className="text-section">
                        <div className="skill-score-list">
                            <br />
                            <p className="center">Find me on <a target="_blank" href="https://www.github.com/jmiller3496">GitHub</a>!</p>
                            {this.state.contents.map(skill => (<div key={skill.Id}>
                                <br />
                                <img src={process.env.PUBLIC_URL + "/img/" + skill.ImageURL} alt={skill.Title} />
                                <br />
                                <br />
                                <div dangerouslySetInnerHTML={{ __html: skill.TextContents }}></div>
                                <hr />
                            </div>))}
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default SoftwarePage