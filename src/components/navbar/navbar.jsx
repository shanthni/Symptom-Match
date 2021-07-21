import React from "react"
import "./navbar.css"

import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"
import Divider from '@material-ui/core/Divider';

import letters_logo from '../../components/logos/letters_logo.png';
import word_logo from '../../components/logos/word_logo.png';


class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" className= "navbarCSS">

                <Link to="/">
                    <img src= {letters_logo} alt= "SurveyAI_Letters_Logo" className= 'navbarHomeLettersLogo' />
                    <img src= {word_logo} alt= "SurveyAI_Word_Logo" className= 'navbarHomeWordLogo' />
                </Link>
                <div className= 'navbarOptions'>
                    <Link to="/">
                        <span className= 'navbarOptionLinks'> HOME </span>
                    </Link>

                    <Link to="/about">
                        <span className= 'navbarOptionLinks'> ABOUT </span>
                    </Link>

                    <Link to="/diagnose">
                        <span className= 'navbarOptionLinks'> DIAGNOSE </span>
                    </Link>

                    <Link to="/contact">
                        <span className= 'navbarOptionLinks'> CONTACT </span>
                    </Link>
                </div>
                <Nav className="mr-auto">
                    <Divider light orientation="vertical" flexItem /> {/* this won't appear for some reason */}
                </Nav>

                <Link to="/profile" className= 'navbarProfileButton'>
                    <i className="fas fa-user-circle"> </i>
                    <span> Profile</span>
                </Link>
                </Navbar>
                {this.props.children}
            </div>
        )
    }
}

export default NavBar;