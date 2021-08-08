import React from "react";
import "./login.css"

import { Container, Form, Button, Card, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom";

import doctorsImage from '../../components/assets/doctors.png';

class loginPage extends React.Component {

    render() {
        return(
            <div className="loginPageCSS">
                <Container fluid>
                    <center>
                        <div className='standardRow'>
                            <div className='standardColumn'>
                                
                            <Card className="loginCard">
                                    <center>
                                    <div className= "loginWord">
                                        LOGIN
                                    </div>
                                        <Form className="loginCardFields">  
                                            <Form.Group controlId="login.userInput">
                                                <Form.Label>Username</Form.Label>
                                                <FormControl autoFocus type="text" placeholder="john.doe@rpi.edu" />
                                            </Form.Group>
                                            <Form.Group controlId="login.passwordInput">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="Password" placeholder="••••••••••••••••" />
                                            </Form.Group>   
                                        </Form>
                                        <Link to="/profile">
                                            <Button variant="success" type="submit" className="loginButton" block>Login</Button>
                                        </Link>
                                    </center>
                                </Card>
                                <div className= 'loginPageForgotPasswordButton'>
                                    <Link to="/forgotPassword"> <span> Forgot Password? </span></Link>
                                </div>
                                <Card className= 'loginPageRegisterCard'>
                                    <center>
                                        <div className= 'loginPageRegisterCardText'>
                                            Don't have an account? <Link to="/register"> <span> Sign Up!</span> </Link>
                                        </div>
                                    </center>
                                </Card>
                            </div>
                            <div className='standardColumn'>
                                <img src= {doctorsImage} alt= "doctors_image" className= 'loginDoctorsImage' />
                            </div>
                        </div>
                    </center>
                </Container>
            </div>
        )
    }
}

export default loginPage;