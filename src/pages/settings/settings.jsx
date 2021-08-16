import React from "react";
import "./settings.css"; // Styling sheet needed for Settings Page customization //

import { Container } from "react-bootstrap"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// This page is primarily used as a "Not Yet Implemented" page until further implementation. //

function settingsPage (props) {
    return(
        <div>
            <Container fluid>
                <div>
                    <Link to="/dashboard"> { /* Button routing to Dashboard page */ }
                        <Button variant="secondary" className="settingsMenuButtons"> Dashboard </Button>
                    </Link>
                </div>
                <div> { /* Disabled button: disabled to let user know they're ON the Settings page */ }
                    <Button disabled variant="secondary" className="settingsMenuButtons"> Settings </Button>
                </div>
                <div>
                    <Link to="/login"> { /* Logout button, routing to Login Page */ }
                        <Button variant="danger" className="settingsLogoutButton"> Log Out </Button>
                    </Link>
                </div>
                <center>
                    <div className= "settingsPlaceholder"> { /* "To be implemented" text */ }
                        This feature is to be added in the future.
                    </div>
                    <Link to="/dashboard"> { /* Button routing back to dashboard page */ }
                        <Button variant="primary" type="submit" className="returnButton" block>Back to Dashboard</Button>
                    </Link>
                </center>
            </Container>
        </div>
    )
}


export default settingsPage;