import React from "react";
import HeaderBar from './../shared/HeaderBar/HeaderBar';

function ContactPage() {
    return (
        <>
            <HeaderBar title="JM Miller - Software Engineering Consultant" />
            <div className="page-contents-panel" style={{ float: "left", width: "68%", margin: "0 16%" }}>
                <hr />
                <div className="text-section">
                    <h4>Contact Me</h4>
                    <hr style={{ width: '15em' }} />
                    <div style={{ textAlign: "left" }}>
                        <br />
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
                    </div>
                    <div style={{ textAlign: "left" }}>
                        <br />
                        For personal contact, or for any questions or comments unrelated to my work as a Technical Consultant:
                        <br />
                        <address>
                            Jon Miller
                            <br />
                            <a href="mailto:mail@jm-miller.com"> Mail@JM-Miller.com</a>
                        </address>
                    </div>
                    <p>Find me on <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/JM-Miller">GitHub</a>!</p>
                </div>
            </div>
        </>
    );
}

export default ContactPage;