import React from "react";
import "./forgotPassword.css"

import { Container, Form, Button, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom";

class forgotPasswordPage extends React.Component {

    render() {
        return(
            <div className="forgotPasswordPageCSS">
                <Container fluid>
                    <center>
                        <div className= "bigHeader">
                            Password Recovery
                        </div>
                        <div className= "description">
                            Enter your registered email address in the text field below. If there’s an account registered for the entered email address, an email with a reset-link will be sent to that address.
                        </div>
                        <Form className="emailField">  
                            <Form.Group controlId="login.userInput">
                                <Form.Label>Email Address</Form.Label>
                                <FormControl autoFocus type="text" placeholder="john.doe@rpi.edu" />
                            </Form.Group>
                        </Form>
                        <Link to="/forgotPasswordResult">
                            <Button variant="success" type="submit" className="submitButton" block>Submit</Button>
                        </Link>
                        <Link to="/login">
                            <Button variant="primary" type="submit" className="backButton" block>Back</Button>
                        </Link>
                    </center>
                </Container>
                
            </div>
        )
    }
}

export default forgotPasswordPage;