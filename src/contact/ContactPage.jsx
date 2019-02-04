import React, { Component } from "react";
import HeaderBar from './../master/HeaderBar';
import { Panel } from 'react-bootstrap';

class ContactPage extends Component {
    render() {
        return (
            <div>

                <HeaderBar title="JM Miller - Salaried Consultant" />
                <Panel className="page-contents-panel" style={{ float: "left", width: "68%", margin: "0 16%" }}>
                    <hr />
                    <div className="text-section">
                        <h4>Contact Me</h4>
                        <hr style={{ width: '15em' }} />
                        <p>
                            For any work-related questions or comments, contact me via email:
                                <br />
                            <address>
                                Jonathan M Miller
                                <br />
                                Robert Half Technology, Salaried Professional Services
                                <br />
                                Pittsburgh, Pennsylvania
                                <br />
                                <a href="mailto:jonathan.miller@rhsps.com">Jonathan.Miller@RHSPS.com</a>
                            </address>
                        </p>
                        <p>
                            For personal contact, or for any questions or comments unrelated to my work as a Technical Consultant:
                                <br />
                            <address>
                                Jon Miller
                                <br />
                                (412) 238-7253
                                <br />
                                <a href="mailto:mail@jm-miller.com"> Mail@JM-Miller.com</a>
                            </address>
                        </p>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default ContactPage;