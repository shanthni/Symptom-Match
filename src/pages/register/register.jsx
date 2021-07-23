import React from "react";
import "./register.css"
import word_logo from '../../components/logos/word_logo.png';

import { Container, Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom";

const registerPage = () => {
    return(
        <div className="registerPageCSS">
            <Container fluid>
                <center>
                    <div className='standardRow'>
                        <div className='standardColumn'>
                            <div className= "registerDescriptionSection">
                                <img src= {word_logo} alt= "SurveyAI_Logo" className= 'registerDescriptionLogo' />
                                <div className= "registerDescriptionHeader">
                                    What is Survey <span className= "registerDescriptionHeaderAI">AI </span> ?
                                </div>
                                <div className= 'registerDescriptionText'>

                                </div>
                                SurveyAI is a platform where -----------------------------------------------
                                { /* This description is to be filled in. */ }
                            </div>
                        </div>
                        <div class='standardColumn'>

                            <Card className="registerCard">
                                <center>
                                <div className = "registerCardHeader">
                                    Register
                                </div>
                                    <Form className="registerCardFields">
                                        <Form.Group>
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Your username"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="Your email" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Your password" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="Confirm your password" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Check type="checkbox" label="I have read and agree to the Terms and Conditions" />
                                        </Form.Group>
                                        {/* <Button variant="success" type="submit" block onClick={notify}>Register</Button> */}
                                    </Form>
                                        <Button variant="success" type="submit" className="registerButton" block>Register</Button>

                                </center>
                            </Card>

                            <Card className= 'registerPageLoginCard'>
                                <center>
                                    <div className= 'registerPageLoginCardText'>
                                        Already have an account? <Link to="/login"> <span> Log In!</span> </Link>
                                    </div>
                                </center>
                            </Card>
                        </div>
                    </div>
                </center>
            </Container>
        </div>
    );
}


export default registerPage;