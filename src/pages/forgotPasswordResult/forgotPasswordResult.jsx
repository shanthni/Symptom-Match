import React from "react";
import "./forgotPasswordResult.css"

import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

class forgotPasswordResultPage extends React.Component {

    render() {
        return(
            <div className="forgotPasswordResultPageCSS">
                <Container fluid>
                    <center>
                        <div className= "bigHeader">
                            Password Recovery Request Submitted
                        </div>
                        <div className= "description">
                            If there’s an account registered with the email address 
                            <span className= "italic bold"> montea6@rpi.edu</span>
                            , then an email with a reset-link will be sent to that address. Be sure to check your spam folder.
                        </div>
                        <Link to="/login">
                            <Button variant="primary" type="submit" className="returnButton" block>Return to Login Page</Button>
                        </Link>
                    </center>
                </Container>
            </div>
        )
    }
}

export default forgotPasswordResultPage;