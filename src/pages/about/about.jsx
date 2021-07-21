import React from "react";
import "./about.css"

import { Container, Button } from "react-bootstrap"

import word_logo from '../../components/logos/word_logo.png';
import doctors from '../../components/assets/happy_doctors_about_page.png';

const aboutPage = () => {
        return(
            <div className= 'aboutPageCSS'>
                <Container fluid>
                    <center>
                        <div className='standardRow'>
                            <div className='standardColumn'>
                                <div className= 'leftColumnConstraint'>
                                    <div className= 'headerContents'> 
                                        <span className= 'headerText'> What is</span>
                                        <span> <img src= {word_logo} alt= "SymptomMatch" className= 'headerLogo' /> </span>
                                        <span className= 'headerQuestionMark'> ? </span>
                                    </div>
                                    <div className= 'descriptionContents'>
                                        <p className= 'descriptionParagraph'>
                                            Symptom Match is a web application with the goal of helping other people self-diagnose any disease
                                            or condition they think they’re coming down with.
                                        </p>

                                        <p className= 'descriptionParagraph'>
                                            Our simplistic UI design makes it easier than ever to select your symptoms. Tied to our intelligent
                                            backend system, we’ll take the data you’ve provided and turn that into our best diagnosis.
                                        </p>

                                        <p className= 'descriptionParagraph'>
                                            With Symptom Match, you’re able to diagnose on your own time, whether that be from home, while at
                                            work, at school, or wherever you are. One of our various goals is to reduce the number of unnecessary
                                            doctor visits & to help those who are unable to make it to the doctor, physically or financially.
                                            Reducing the total number of unnecessary doctor visits leaves more time for some of those who need it
                                            (i.e, those with serious, life threatening conditions).
                                        </p>

                                        <p className= 'descriptionParagraph'>
                                            Symptom Match is also here to help identify life-threatening issues before they become fatal. (insert more description here)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='standardColumn'>
                                <div className= 'rightColumnConstraint'>
                                    <div className= 'doctorsPhotoDiv'>
                                        <span> <img src= {doctors} alt= "SymptomMatch" className= 'doctorsPhoto' /> </span>
                                    </div>
                                    <div className= 'contributorsDiv'>
                                        <div className= 'contributorsHeader'>
                                            This project was contributed to by:
                                        </div>
                                        <div className= 'contributor'>
                                            Alexander Montes
                                        </div>
                                        <div className= 'contributor'>
                                            Chrissie Shen
                                        </div>
                                        <div className= 'contributor'>
                                            Anisha Halwai
                                        </div>
                                        <div className= 'contributor'>
                                            Shanthni Ravindrababu
                                        </div>
                                        <div className= 'contributor'>
                                            Joel Grimaldi
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </center>
                </Container>
            </div>
        );
}

export default aboutPage
