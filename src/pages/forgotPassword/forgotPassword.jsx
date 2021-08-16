import React from "react";
import "./forgotPassword.css" // Styling sheet needed for Forgot Password Page customization //

import { Container, Form, Button, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom";

function forgotPasswordPage (props) {
    const recoveryMessage = "Enter your registered email address in the text field below. If there’s " +
    "an account registered for the entered email address, an email with a reset-link will be sent to that address.";

    return(
        <div>
            <Container fluid>
                <center> { /* Needed to align all page contents to center */ }
                    <div className= "bigHeader"> { /* Password Recovery Header */ }
                        Password Recovery
                    </div>
                    <div className= "description"> { /* Password Recovery Description */ }
                        { recoveryMessage }
                    </div>
                    <Form className="emailField"> { /* Email Field that the user enters their email into */ }
                        <Form.Group controlId="login.userInput">
                            <Form.Label>Email Address</Form.Label>
                            <FormControl autoFocus type="text" placeholder="john.doe@rpi.edu" />
                        </Form.Group>
                    </Form>
                    <Link to="/forgotPasswordResult"> { /* Submit button that routes to the Forgot Password Result */ }
                        <Button variant="success" type="submit" className="submitButton" block>Submit</Button>
                    </Link>
                    <Link to="/login"> { /* Back button that routes to the login page */ }
                        <Button variant="primary" type="submit" className="backButton" block>Back</Button>
                    </Link>
                </center>
            </Container>
        </div>
    )
}

export default forgotPasswordPage;