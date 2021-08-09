import React from "react";
import "./settings.css"

import { Container } from "react-bootstrap"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function settingsPage (props) {
    return(
        <div className="settingsPageCSS">
            <Container fluid>
                <div>
                    <Link to="/dashboard">
                        <Button variant="secondary" className="settingsMenuButtons"> Dashboard </Button>
                    </Link>
                </div>
                <div>
                    <Button disabled variant="secondary" className="settingsMenuButtons"> Settings </Button>
                </div>
                <div>
                    <Link to="/login">
                        <Button variant="danger" className="settingsLogoutButton"> Log Out </Button>
                    </Link>
                </div>
                <center>
                    <div className= "settingsPlaceholder">
                        This feature is to be added in the future.
                    </div>
                    <Link to="/dashboard">
                        <Button variant="primary" type="submit" className="returnButton" block>Back to Dashboard</Button>
                    </Link>
                </center>
            </Container>
        </div>
    )
}


export default settingsPage;