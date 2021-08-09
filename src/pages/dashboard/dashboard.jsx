import React from "react";
import "./dashboard.css"

import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

import orDivider from '../../components/assets/or_divider.jpg';
import share from '../../components/assets/share_button.png';
import edit from '../../components/assets/edit_button.png';
import discard from '../../components/assets/discard_button.png';

const dashboardPage = () => {

    var diagnosesList = ["Tuberculosis", "Measles"];

    diagnosesList = ["Tuberculosis", "Measles", "Common Cold"];

    return(
        <div className= "dashboardCSS">
            <Container fluid>
                <center>
                    <div className='standardRow'>
                        <div class='leftColumn'>
                            <div className= "headerWrapper">
                                <span className= "smallHeyHeader">Hey,</span>
                                <span className= "bigNameHeader"> Alex.</span>
                            </div>

                            <Link to="/diagnose">
                                <Button variant="primary" type="submit" className="beginDiagnosisButton" block>Diagnose Symptoms</Button>
                            </Link>

                            <img src= {orDivider} alt= "divider" className= 'or_divider' />

                            <div className= "manageDiagnosesHeader">
                                Manage your diagnoses:
                            </div>
                            <div>
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
                        <div class='standardColumn'>
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
                <div className= "temp">

                </div>
            </Container>
        </div>
    );
}

export default dashboardPage
