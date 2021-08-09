import React from "react";
import "./contact.css"

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap"

import git_logo from '../../components/assets/git_logo.png';
import mail_logo from '../../components/assets/mail_logo.png';

const contactPage = () => {
        return(
            <Container fluid>
                <center>
                    <div className= "contactPageBigHeader">
                        We
                        <span className= "contactPageBigHeaderLove"> love </span>
                        our friends, fans & family!
                    </div>
                    <div className= "smallContactDescription">
                    Feel free to check out our GitHub repository using the GitHub Logo hyperlink, or send an email to our Frontend Project Manager using the Mail hyperlink.
                    </div>
                    <div className= "imageContainer">
                        <span>
                        <Link to="/">
                        <a href="https://github.com/shanthni/Symptom-Match">
                            <img src= {git_logo} alt= "Repository_Logo" className= 'contactGitLogo' />
                        </a>

                        <a href="mailto:montea6@rpi.edu">
                            <img src= {mail_logo} alt= "Mailing_Logo" className= 'contactMailLogo' />
                        </a>

                            
                            
                        </Link>
                        </span>
                    </div>
                </center>
            </Container>
            
        );
}

export default contactPage
