import React from "react";
import "./diagnoseResults.css" // Styling sheet needed for Diagnosis Results Page customization //

import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap"

// import pie from '../../components/assets/pie_chart_1.png';
// import colorPallete from '../../components/assets/diagnosisColors.jpg';
// Originally used for v1 diagnosisResults Page - "removed" for the presentation demo //

function diagnoseResults (props) {

    var results = ["Common Cold\n", "Influenza (35%)", "Fever (20%)"]; //Array containing the "top 3" diagnosis results //
    
    return(
        <div>
            <Container fluid>
                <center> { /* Needed to align all page contents to center */ }
                    <div className= "bigResultHeader"> { /* Header div */ }
                        Results of your Diagnosis
                    </div>
                    <div className= "firstLikelihood"> { /* Only showing first likelihood for presentation demo purposes */ }
                        { results[0] }
                    </div>
                    <span>
                        <Link to="/dashboard"> { /* Button that routes to dashboard */ }
                            <Button variant="primary" type="submit" className="diagnosisOptionButtons" block>Proceed to Dashboard</Button>
                        </Link>
                    </span>
                    <span>
                        <Link to="/diagnose"> { /* Button that routes back to diagnose page */ }
                            <Button variant="primary" type="submit" className="diagnosisOptionButtons" block>Start another diagnosis</Button>
                        </Link>
                    </span>
                    <div>
                        <Link to="/diagnose"> { /* Diagnosis Result Page Logout button */ }
                            <Button variant="danger" type="submit" className="diagnosisLogoutButton" block>Finish & Log Out</Button>
                        </Link>
                    </div>
                </center>
            </Container>
        </div>
    )
}


export default diagnoseResults;