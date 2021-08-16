import React from "react";
import "./about.css" // Styling sheet needed for About Page customization //

import { Container } from "react-bootstrap"

import word_logo from '../../components/logos/word_logo.png'; // SymptomMatch word logo to have at the top of the About page //
import doctors from '../../components/assets/happy_doctors_about_page.png'; // Doctors image to have to the right of the description text //

const aboutPage = () => {

    const firstParagraph = "Symptom Match is a web application with the goal of helping other people self-diagnose any disease " +
    "or condition they think they’re coming down with.";

    const secondParagraph = "Our simplistic UI design makes it easier than ever to select your symptoms. Tied to our intelligent " +
    "backend system, we’ll take the data you’ve provided and turn that into our best diagnosis.";

    const thirdParagraph = "With Symptom Match, you’re able to diagnose on your own time, whether that be from home, while at " +
    "work, at school, or wherever you are. One of our various goals is to reduce the number of unnecessary " +
    "doctor visits & to help those who are unable to make it to the doctor, physically or financially. " +
    "Reducing the total number of unnecessary doctor visits leaves more time for some of those who need it " +
    "(i.e, those with serious, life threatening conditions).";

    const fourthParagraph = "Symptom Match is also here to help identify life-threatening issues before they become fatal.";

    const contributorsArray = ["Alexander Montes", "Chrissie Shen", "Anisha Halwai", "Shanthni Ravindrababu", "Joel Grimaldi"];

    return(
        <div className= 'aboutPageCSS'> { /* Needed to assert the page background color */ }
            <Container fluid>
                <center> { /* Needed to align all page contents to center */ }
                    <div className='standardRow'> { /* ROW CONTAINER */ }
                        <div className='standardColumn'> { /* LEFT COLUMN */ }
                            <div className= 'leftColumnConstraint'> { /* Constraint for left column to avoid page from looking weird */ }
                                <div className= 'headerContents'>  { /* "What is Symptom Match?" header */ }
                                    <span className= 'headerText'> What is</span>
                                    <span> <img src= {word_logo} alt= "SymptomMatch" className= 'headerLogo' /> </span>
                                    <span className= 'headerQuestionMark'> ? </span>
                                </div>
                                <div className= 'descriptionContents'> { /* ALL-description container */ }
                                    <p className= 'descriptionParagraph'>
                                        { firstParagraph }
                                    </p>

                                    <p className= 'descriptionParagraph'>
                                        { secondParagraph }
                                    </p>

                                    <p className= 'descriptionParagraph'>
                                        { thirdParagraph }
                                    </p>

                                    <p className= 'descriptionParagraph'>
                                        { fourthParagraph }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='standardColumn'> { /* RIGHT COLUMN */ }
                            <div className= 'rightColumnConstraint'> { /* Constraint for right column to avoid page from looking weird */ }
                                <div className= 'doctorsPhotoDiv'>
                                    <span> <img src= {doctors} alt= "SymptomMatch" className= 'doctorsPhoto' /> </span> { /* DOCTORS IMAGE */ }
                                </div>
                                <div className= 'contributorsDiv'> { /* Container for Contributors List */ }
                                    <div className= 'contributorsHeader'> { /* Header for contributors list */ }
                                        This project was contributed to by:
                                    </div>
                                    <div className= 'contributor'>
                                        { contributorsArray[0] }
                                    </div>
                                    <div className= 'contributor'>
                                        { contributorsArray[1] }
                                    </div>
                                    <div className= 'contributor'>
                                        { contributorsArray[2] }
                                    </div>
                                    <div className= 'contributor'>
                                        { contributorsArray[3] }
                                    </div>
                                    <div className= 'contributor'>
                                        { contributorsArray[4] }
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
