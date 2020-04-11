import React, { useState, useEffect } from 'react';
import HeaderBar from '../shared/HeaderBar/HeaderBar';
import LoadingGraphic from '../shared/LoadingGraphic/LoadingGraphic';
import { GetArticles } from '../helpers/RestHelper';
import './SkillsPage.css';

function SkillsPage() {

    const [contents, setContents] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        if(!contents) {
            setLoading(true);
            GetArticles(5).then((value) => {
                setTimeout(() => {
                    setContents(value.recordset);
                    setLoading(false);
                }, 2000);
            }).catch(() => {
                console.log("There was an error fetching articles!");
            });
        }
    }, [contents, loading]);

    return (
        <>
            <HeaderBar title="JM Miller - Software Engineering Consultant" />
                {loading &&
                    <LoadingGraphic />
                }
                {!loading && contents &&
                    <div className="page-contents-panel">
                        <div className="text-section">
                            <div className="skill-score-list">
                                <p className="center">Find me on <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/JM-Miller">GitHub</a>!</p>
                                <br />
                                {contents && contents.map(skill => (<div key={skill.Id}>
                                    <br />
                                    <img src={process.env.PUBLIC_URL + "/img/" + skill.ImageURL} alt={skill.Title} />
                                    <br />
                                    <br />
                                    <div className="html-text-content-area" dangerouslySetInnerHTML={{ __html: skill.TextContents }}></div>
                                    <hr />
                                </div>))}
                            </div>
                        </div>
                    </div>
                }
        </>
    );
}

export default SkillsPage