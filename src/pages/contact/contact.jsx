import React from "react";
import "./contact.css" // Styling sheet needed for Contact Page customization //

import { Container } from "react-bootstrap"

import git_logo from '../../components/assets/git_logo.png'; // GitHub Logo for the bottom of the page //
import mail_logo from '../../components/assets/mail_logo.png'; // Mail Logo for the bottom of the page //

const contactPage = () => {

    const smallSentence = "Feel free to check out our GitHub repository using the GitHub Logo hyperlink, " +
    "or send an email to our Frontend Project Manager using the Mail hyperlink.";

    return(
        <Container fluid>
            <center> { /* Needed to align all page contents to center */ }
                <div className= "contactPageBigHeader">
                    We
                    <span className= "contactPageBigHeaderLove"> love </span>
                    our friends, fans & family!
                </div>
                <div className= "smallContactDescription">  { /* Contact page Description */ }
                    { smallSentence }
                </div>
                <div className= "imageContainer">  { /* Container for images that are really hyperlinks */ }
                    <span>
                        <a href="https://github.com/shanthni/Symptom-Match">  { /* Hyperlink to our GitHub Repository */ }
                            <img src= {git_logo} alt= "Repository_Logo" className= 'contactGitLogo' />
                        </a>

                        <a href="mailto:montea6@rpi.edu"> { /* Hyperlink to send an email to our Frontend PM */ }
                            <img src= {mail_logo} alt= "Mailing_Logo" className= 'contactMailLogo' />
                        </a>
                    </span>
                </div>
            </center>
        </Container>
    );
}

export default contactPage
