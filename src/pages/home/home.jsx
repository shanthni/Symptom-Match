import React from "react";
import "./home.css" // Styling sheet needed for Home Page customization //

import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap"

import word_logo from '../../components/logos/word_logo.png'; // SymptomMatch word logo to have in the header //
import draymond_smith_image from '../../components/assets/draymond_smith.jpg'; // Image of "Draymond Smith" for use in the reviews //
import kaleb_bowlin_image from '../../components/assets/kaleb_bowlin.jpg'; // Image of "Kaleb Bowlin" for use in the reviews //
import star_rating from '../../components/assets/star_rating.png'; // Image of 9/10 star rating for top right of homepage //

function homePage (props) {

    const draymondReview = "“Symptom Match saved my life. I was playing soccer with friends and it all hit me at once: nausea, chills, stabbing pain– all that jazz. " +
    "I just thought it was something I’d ate that was messing with my stomach, but I figured I’d look up my symptoms anyway. The top result " +
    "wasn’t Appendicitis, but I wanted to stay on the safe side. If I hadn’t at least looked up my symptoms I would’ve never been reminded " +
    "that Appendicitis was a thing, and I could’ve easily died leaving that untreated. I’m grateful for Symptom Match & would totally " +
    "recommend it to any of my friends.”";

    const kalebReview = "“I’ve saved a lot of money with Symptom Match. I’ve avoided numerous doctor visits by self-diagnosing using this platform, which means " +
    "worlds to my family and me since we can’t afford the insurance fees or monthly payments. I'm sure I'm not the only one out there with " +
    "this same limitation; I'm sure there are plenty of others. Services like these can really save lives.\"";

    return(
        <div>
            <Container fluid>
                <center> { /* Needed to align all page contents to center */ }
                    <div className='standardRow'> { /* ROW CONTAINER */ }
                        <div className='standardColumn'> { /* LEFT COLUMN */ }
                            <div className= 'homepageWelcomeLeadingText'> { /* Begin header construction */ }
                                Welcome to  
                            </div>
                            <img src= {word_logo} alt= "SymptomMatch_Logo" className= 'homepageWordLogo' />
                            <div className= 'homepageWelcomeTrailingText'>
                                The <span className= 'underline'> last</span> self-diagnosis platform you'll ever need!
                            </div>
                            <div className= 'userReviewsSection'> { /* Begin user reviews */ }
                                <div className= 'userReviewsSectionHeader underline'>
                                    What Users Have Said
                                </div>
                                <div className= 'userReviewsSectionBody'>
                                    { draymondReview }
                                </div>

                                <div className= 'userReviewsSectionCreditPhoto'> { /* Photo of "Draymond Smith" */ }
                                    <img src= {draymond_smith_image} alt= "draymond_smith_image" className='profileImage' />
                                </div>

                                <div className= 'userReviewsSectionCreditName'>
                                    - Draymond Smith
                                </div>
                                <div className= 'userReviewsSectionCreditSchool'>
                                    Penn State
                                </div>

                                <div className= 'verticalSpacer' />

                                <div className= 'userReviewsSectionBody'>
                                    { kalebReview }
                                </div>

                                <div className= 'userReviewsSectionCreditPhoto'> { /* Photo of "Kaleb Bowlin" */ }
                                    <img src= {kaleb_bowlin_image} alt= "draymond_smith_image" className='profileImage' />
                                </div>

                                <div className= 'userReviewsSectionCreditName'>
                                    - Kaleb Bowlin
                                </div>
                                <div className= 'userReviewsSectionCreditSchool'>
                                    Rensselaer Polytechnic Institute
                                </div>
                            </div>
                        </div>
                        <div className='standardColumn'> { /* RIGHT COLUMN */ }
                            <div className= 'rightColumnConstraint'> { /* Constraint to keep the right column from looking weird */ }
                                <img src= {star_rating} alt= "Sympmatch_Rating_Image" className= 'starRatingImage' /> { /* Photo of 9/10 stars */ }
                                <div className= 'ratingDescription'>
                                    Recommended by 9 out of every 10 doctors
                                </div>
                            </div>

                            <div className= 'diagnoseSuggestionArea'> { /* Diagnose suggestion area */ }
                                <div className= 'diagnoseSuggestionHeader'>
                                    Think you’re coming down with something?
                                </div>
                                <Link to="/diagnose"> { /* Button routing to Diagnose page */ }
                                    <Button variant="primary" type="submit" className="diagnoseSuggestionButton" block>Start a self-diagnosis</Button>
                                </Link>
                            </div>

                            <div className= 'writeReviewArea'> { /* Review writing-container */ }
                                <div className= 'writeReviewHeader'>
                                    Got anything we should know about?
                                </div>
                                <Link to="/settings"> { /* Button routing to "Not yet implemented" page */ }
                                    <Button variant="primary" type="submit" className="writeReviewButton" block>Write a review</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </center>
            </Container>
        </div>
    )
}


export default homePage;