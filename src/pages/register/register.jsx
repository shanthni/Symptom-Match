import React from "react";
import "./register.css"

import { Container, Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom";

import doctorImage from '../../components/assets/register_doctor.png';

const registerPage = () => {
    return(
        <div className="registerPageCSS">
            <Container fluid>
                <center>
                    <div className='standardRow'>
                        <div className='standardColumn'>
                            <img src= {doctorImage} alt= "SurveyAI_Logo" className= 'registerDoctorImage' />
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
                                            <Form.Control type="text" placeholder="jdoe25"/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="john.doe@rpi.edu" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="••••••••••••••••" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="••••••••••••••••" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Check type="checkbox" label="I have read and agree to the Terms and Conditions" />
                                        </Form.Group>
                                    </Form>
                                        <Link to="/profile">
                                            <Button variant="success" type="submit" className="registerButton" block>Register</Button>
                                        </Link>

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