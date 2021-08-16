import React from "react";
import "./forgotPasswordResult.css" // Styling sheet needed for Forgot Password Rersult Page customization //

import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

function forgotPasswordResultPage (props) {

    const descriptionOne = "If there’s an account registered with the email address ";
    const descriptionTwo = ", then an email with a reset-link will be sent to that address. Be sure to check your spam folder.";

    return(
        <div>
            <Container fluid>
                <center> { /* Needed to align all page contents to center */ }
                    <div className= "bigHeader"> { /* Submitted Header */ }
                        Password Recovery Request Submitted
                    </div>
                    <div className= "description"> { /* Needed to align all page contents to center */ }
                        { descriptionOne }
                        <span className= "italic bold"> montea6@rpi.edu</span> { /* Temporarily Alex's email: for presentation */ }
                        { descriptionTwo }
                    </div>
                    <Link to="/login"> { /* Button that routes back to the login page */ }
                        <Button variant="primary" type="submit" className="returnButton" block>Return to Login Page</Button>
                    </Link>
                </center>
            </Container>
        </div>
    )
}

export default forgotPasswordResultPage;