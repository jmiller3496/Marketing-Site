import React, { Component } from "react";
import HeaderBar from "./../../shared/HeaderBar/HeaderBar";
import { GetArticles } from "./../../helpers/RestHelper";

class TravelWritingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { contents: [] }

        GetArticles(3).then((value) => {
            this.setState({ contents: value.recordset });
        });
    }

    render(){
        return (
            <div>
                <HeaderBar title="JM Miller - Software Engineering Consultant" />
                <div>
                <span>
                        {this.state.contents.map(skill => (<div key={skill.Id}>
                                <br />
                                <img src={process.env.PUBLIC_URL + "/img/" + skill.ImageURL} alt={skill.Title} />
                                <br />
                                <br />
                                <div dangerouslySetInnerHTML={{ __html: skill.TextContents }}></div>
                                <hr />
                            </div>))}
                    </span>
                </div>
            </div>
        );
    }
}

export default TravelWritingPage;