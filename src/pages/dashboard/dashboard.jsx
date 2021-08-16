import React from "react";
import "./dashboard.css" // Styling sheet needed for Dashboard Page customization //

import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

import orDivider from '../../components/assets/or_divider.jpg'; // Long horizontal line with "OR" (divider) //
import share from '../../components/assets/share_button.png'; // Share button, used next to the "Past Diagnoses" indicators //
import edit from '../../components/assets/edit_button.png'; // Edit button, used next to the "Past Diagnoses" indicators //
import discard from '../../components/assets/discard_button.png'; // Discard button, used next to the "Past Diagnoses" indicators //

const dashboardPage = () => {

    var diagnosesList = ["Tuberculosis", "Measles"]; //* Array of past Diagnoses //

    return(
        <div> { /* Dashboard Page container Dov */ }
            <Container fluid>
                <center> { /* Needed to align all page contents to center */ }
                    <div className='standardRow'> { /* ROW CONTAINER */ }
                        <div class='leftColumn'> { /* LEFT COLUMN */ }
                            <div className= "headerWrapper"> { /* Header Container */ }
                                <span className= "smallHeyHeader">Hey,</span>
                                <span className= "bigNameHeader"> Alex.</span>
                            </div>

                            <Link to="/diagnose"> { /* Button that routes to the diagnose page */ }
                                <Button variant="primary" type="submit" className="beginDiagnosisButton" block>Diagnose Symptoms</Button>
                            </Link>

                            <img src= {orDivider} alt= "divider" className= 'or_divider' /> { /* Long ---OR--- image divider */ }

                            <div className= "manageDiagnosesHeader">
                                Manage your diagnoses:
                            </div>
                            <div> { /* Map that lists the past diagnoses, along with their respective share, edit and discard buttons */ }
                            {
                                diagnosesList.map((value, index) => {
                                    return(
                                        <div className= 'diagnosesContents'> 
                                            <Button variant="secondary" type="submit" className="diagnosesButtons"> { value.charAt(0).toUpperCase() + value.slice(1) } </Button>
                                            <img src= {share} alt= "divider" className= 'diagnosesShareButtons' />
                                            <img src= {edit} alt= "divider" className= 'diagnosesEditButtons' />
                                            <img src= {discard} alt= "divider" className= 'diagnosesDiscardButtons' />
                                        </div>
                                    )
                                })
                            }
                            </div>

                        </div>
                        <div class='standardColumn'> { /* Needed to align all page contents to center */ }
                            <Button disabled variant="secondary" className="dashboardMenuButtons"> Dashboard </Button> 
                            <Link to="/settings">
                                <Button variant="secondary" className="dashboardMenuButtons"> Settings </Button>
                            </Link>
                            <Link to="/login">
                                <Button variant="danger" className="dashboardLogoutButton"> Log Out </Button>
                            </Link>
                        </div>
                    </div>
                </center>
            </Container>
        </div>
    );
}

export default dashboardPage
