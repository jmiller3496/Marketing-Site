import React, { Component } from 'react';
import HeaderBar from '../shared/HeaderBar/HeaderBar';
import LoadingGraphic from '../shared/LoadingGraphic/LoadingGraphic';
import { Panel } from 'react-bootstrap';
import { GetArticles } from '../helpers/RestHelper';
import './SkillsPage.css';

class SkillsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { contents: [], loading: true }

        GetArticles(5).then((value) => {
            setTimeout(() => {
                this.setState({ contents: value.recordset, loading: false });
            }, 2000);
        });
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
                            <div className="text-section">
                                <div className="skill-score-list">
                                    <br />
                                    <p className="center">Find me on <a target="_blank" href="https://www.github.com/JM-Miller">GitHub</a>!</p>
                                    {this.state.contents.map(skill => (<div key={skill.Id}>
                                        <br />
                                        <img src={process.env.PUBLIC_URL + "/img/" + skill.ImageURL} alt={skill.Title} />
                                        <br />
                                        <br />
                                        <div className="html-text-content-area" dangerouslySetInnerHTML={{ __html: skill.TextContents }}></div>
                                        <hr />
                                    </div>))}
                                </div>
                            </div>
                        </Panel>
                    }
            </>
        );
    }
}

export default SkillsPage