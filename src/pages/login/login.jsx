import React from "react";
import "./login.css"; // Styling sheet needed for Login Page customization //

import { Container, Form, Button, Card, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom";

import doctorsImage from '../../components/assets/doctors.png'; // Doctors image for right column //

function loginPage (props){
    return(
        <div className="loginPageCSS">
            <Container fluid>
                <center> { /* Needed to align all page contents to center */ }
                    <div className='standardRow'> { /* ROW CONTAINER */ }
                        <div className='standardColumn'> { /* LEFT COLUMN */ }
                            <Card className="loginCard">
                                <center>
                                <div className= "loginWord">  { /* LOGIN Header */ }
                                    LOGIN
                                </div>
                                    <Form className="loginCardFields"> { /* Login fields container */ }
                                        <Form.Group controlId="login.userInput">
                                            <Form.Label>Username</Form.Label>
                                            <FormControl autoFocus type="text" placeholder="john.doe@rpi.edu" />
                                        </Form.Group>
                                        <Form.Group controlId="login.passwordInput">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="Password" placeholder="••••••••••••••••" />
                                        </Form.Group>   
                                    </Form>
                                    <Link to="/dashboard">  { /* Login button, routing to dashboard */ }
                                        <Button variant="success" type="submit" className="loginButton" block>Login</Button>
                                    </Link>
                                </center>
                            </Card>
                            <div className= 'loginPageForgotPasswordButton'>  { /* Forgot password button */ }
                                <Link to="/forgotPassword"> <span> Forgot Password? </span></Link>
                            </div>
                            <Card className= 'loginPageRegisterCard'>  { /* Sign-up card */ }
                                <center>
                                    <div className= 'loginPageRegisterCardText'>
                                        Don't have an account? <Link to="/register"> <span> Sign Up!</span> </Link>
                                    </div>
                                </center>
                            </Card>
                        </div>
                        <div className='standardColumn'>  { /* RIGHT COLUMN */ }
                            <img src= {doctorsImage} alt= "doctors_image" className= 'loginDoctorsImage' />
                        </div>
                    </div>
                </center>
            </Container>
        </div>
    )
}

export default loginPage;