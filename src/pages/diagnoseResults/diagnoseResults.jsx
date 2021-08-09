import React from "react";
import "./diagnoseResults.css"

import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap"

import pie from '../../components/assets/pie_chart_1.png';
import colorPallete from '../../components/assets/diagnosisColors.jpg';

function diagnoseResults (props) {

    var results = ["Common Cold\n", "Influenza (35%)", "Fever (20%)"];

    // results = ["Heat Rash", "Dermatitis (38%)", "Measles (19%)", "Heat Rash (43%)"];

    return(
        <div className="homeCSS">
            <Container fluid>
                <center>

                    <div className= "bigResultHeader">
                        Results of your Diagnosis
                    </div>
                    <div className= "firstLikelihood">
                        { results[0] }
                    </div>

                    
                </center>
                            <center>
                                <span>
                                    <Link to="/dashboard">
                                        <Button variant="primary" type="submit" className="diagnosisOptionButtons" block>Proceed to Dashboard</Button>
                                    </Link>
                                </span>
                                <span>
                                    <Link to="/diagnose">
                                        <Button variant="primary" type="submit" className="diagnosisOptionButtons" block>Start another diagnosis</Button>
                                    </Link>
                                </span>
                                <div>
                                    <Link to="/diagnose">
                                        <Button variant="danger" type="submit" className="diagnosisLogoutButton" block>Finish & Log Out</Button>
                                    </Link>
                                </div>
                            </center>
            </Container>
        </div>
    )
}


export default diagnoseResults;