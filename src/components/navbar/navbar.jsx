import React from "react"
import "./navbar.css" // Styling sheet needed for NavBar customization //

import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"
import Divider from '@material-ui/core/Divider';

import letters_logo from '../../components/logos/letters_logo.png'; // SM Logo, for left of NavBar //
import word_logo from '../../components/logos/word_logo.png'; // SymptomMatch logo image, for next to SM Logo //


class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" className= "navbarCSS"> { /* NavBar component, makes up bar on the top of the screen */}
                    <Link to="/"> { /* Link the image(s) on the left of the NavBar to the homepage */}
                        <img src= {letters_logo} alt= "SymptomMatch_Letters_Logo" className= 'navbarHomeLettersLogo' />
                        <img src= {word_logo} alt= "SymptomMatch_Word_Logo" className= 'navbarHomeWordLogo' />
                    </Link>
                    <div className= 'navbarOptions'> { /* Container that holds hyperlinks for the homepage, aboutpage, etc. */}
                        <Link to="/"> { /* Hyperlink to homepage */}
                            <span className= 'navbarOptionLinks'> HOME </span>
                        </Link>

                        <Link to="/about"> { /* Hyperlink to about page */}
                            <span className= 'navbarOptionLinks'> ABOUT </span>
                        </Link>

                        <Link to="/diagnose"> { /* Hyperlink to diagnose page */}
                            <span className= 'navbarOptionLinks'> DIAGNOSE </span>
                        </Link>

                        <Link to="/contact"> { /* Hyperlink to Contact page */}
                            <span className= 'navbarOptionLinks'> CONTACT </span>
                        </Link>
                    </div>
                    <Nav className="mr-auto">
                        <Divider light orientation="vertical" flexItem /> {/* moves remaining content to the right */}
                    </Nav>

                    <Link to="/login" className= 'navbarProfileButton'> { /* Hyperlink to login pages and dashboard */}
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