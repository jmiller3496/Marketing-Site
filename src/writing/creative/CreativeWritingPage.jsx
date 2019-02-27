import React, { Component } from "react";
import HeaderBar from "./../../master/HeaderBar";
import { GetArticles } from "./../../helpers/RestHelper";

class CreativeWritingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { contents: [] }

        GetArticles(1).then((value) => {
            this.setState({ contents: value.recordset });
        });
    }

    render(){
        return (
            <div>
                <HeaderBar title="JM Miller - Salaried Consultant" />
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

export default CreativeWritingPage;