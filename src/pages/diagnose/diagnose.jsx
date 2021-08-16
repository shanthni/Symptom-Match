import React from "react";
import "./diagnose.css" // Styling sheet needed for Dashboard Page customization //

import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap"

// import diseaseCSV from '../../components/CSV/symptom_to_disease.csv';
// This has been removed. It remains here commented for use in the future. //

const diagnosePage = () => {
    // Hard-coded list of Symptoms to list on the Diagnose Page //
    const symptoms = ["itching", "skin rash", "nodal skin eruptions", "continuous sneezing", "shivering", "chills", "joint pain", "stomach pain", "acidity", "ulcers on tongue", "muscle wasting", "vomiting", "burning micturition", "spotting  urination", "fatigue", "weight gain", "anxiety", "cold hands and feets", "mood swings", "weight loss", "restlessness", "lethargy", "patches in throat", "irregular sugar level", "cough", "high fever", "sunken eyes", "breathlessness", "sweating", "dehydration", "indigestion", "headache", "yellowish skin", "dark urine", "nausea", "loss of appetite", "pain behind the eyes", "back pain", "constipation", "abdominal pain", "diarrhoea", "mild fever", "yellow urine", "yellowing of eyes", "acute liver failure", "fluid overload", "swelling of stomach", "swelled lymph nodes", "malaise", "blurred and distorted vision", "phlegm", "throat irritation", "redness of eyes", "sinus pressure", "runny nose", "congestion", "chest pain", "weakness in limbs", "fast heart rate", "pain during bowel movements", "pain in anal region", "bloody stool", "irritation in anus", "neck pain", "dizziness", "cramps", "bruising", "obesity", "swollen legs", "swollen blood vessels", "puffy face and eyes", "enlarged thyroid", "brittle nails", "swollen extremeties", "excessive hunger", "extra marital contacts", "drying and tingling lips", "slurred speech", "knee pain", "hip joint pain", "muscle weakness", "stiff neck", "swelling joints", "movement stiffness", "spinning movements", "loss of balance", "unsteadiness", "weakness of one body side", "loss of smell", "bladder discomfort", "foul smell of urine", "continuous feel of urine", "passage of gases", "internal itching", "toxic look (typhos)", "depression", "irritability", "muscle pain", "altered sensorium", "red spots over body", "belly pain", "abnormal menstruation", "dischromic  patches", "watering from eyes", "increased appetite", "polyuria", "family history", "mucoid sputum", "rusty sputum", "lack of concentration", "visual disturbances", "receiving blood transfusion", "receiving unsterile injections", "coma", "stomach bleeding", "distention of abdomen", "history of alcohol consumption", "fluid overload", "blood in sputum", "prominent veins on calf", "palpitations", "painful walking", "pus filled pimples", "blackheads", "scurring", "skin peeling", "silver like dusting", "small dents in nails", "inflammatory nails", "blister", "red sore around nose", "yellow crust ooze", "prognosis"];
    symptoms.sort();

    // Dynamic list of symptoms that the user selects //
    const selectedSymptoms = [];
    selectedSymptoms.sort();

    return(
        <div> { /* Diagnose page container */ }
            <Container fluid>
                <center> { /* Needed to align all page contents to center */ }
                    <div className='standardRow'> { /* ROW CONTAINER */ }
                        <div className='standardColumn'> { /* LEFT COLUMN */ }
                            <div className= "diagnoseHeaderContainer"> { /* Diagnose page greeting */ }
                                <div className= "diagnoseBigHeader">
                                    Let's get started.
                                </div>
                                <div className= "diagnoseSmallHeader">
                                    Select all symptoms you’re experiencing.
                                </div>
                            </div>
                            <div className= "symptomCategoryLetter">
                                A
                            </div>
                            <div className = "symptomListContainer"> { /* Container that holds every symptom and their section */ }
                            { /* The idea behind this part of the program is that the Map goes through i thru n in the symptoms
                               * array. For a specified section, symptoms within range i -> n are symptoms that have a first letter
                               * that match a specified section. This is repeated for different sections of letters:
                               *                        A -> B -> C -> D -> E -> F -> G -> etc.
                               */ }

                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index < 6 && 
                                                <span>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </span>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                                </div>
                            
                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                B
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index < 18 && index > 5 &&
                                                <span>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </span>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                C
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index < 28 && index > 17 &&
                                                <span>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </span>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                D
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 27 && index < 36 &&
                                                <span>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </span>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}
                            <div className= "symptomCategoryLetter">
                                E
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 35 && index < 39 &&
                                                <span>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </span>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                F
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 38 && index < 45 &&
                                                <span>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </span>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}
                            <div className= "symptomCategoryLetter">
                                H
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 44 && index < 49 &&
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }


                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}
                            <div className= "symptomCategoryLetter">
                                I
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 48 && index < 57 &&
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                J
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index === 57 && 
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}
                            <div className= "symptomCategoryLetter">
                                K
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index === 58 && 
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                L
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 58 && index < 64 &&
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                M
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 63 && index < 72 &&
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                N
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 71 && index < 75 && 
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}
                            <div className= "symptomCategoryLetter">
                                O
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index === 75 && 
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                P
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 75 && index < 89 &&
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                R
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 88 && index < 97 &&
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                S
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 96 && index < 118 &&
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                T
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 117 && index < 120 &&
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}
                            <div className= "symptomCategoryLetter">
                                U
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 119 && index < 122 &&
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                V
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 121 && index < 124 &&
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                W
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 123 && index < 129 &&
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* ============================ */}

                            <div className= "symptomCategoryLetter">
                                Y
                            </div>
                            <div className = "symptomListContainer">
                                <ul className= "symptomsList">
                                    {
                                    symptoms.map((value, index) => {
                                        return (
                                            <div>
                                                {index > 128 &&
                                                <div>
                                                    <input type="checkbox" className= "symptomCheckbox"/> 
                                                    <label> { value.charAt(0).toUpperCase() + value.slice(1) } </label>
                                                </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className='standardColumn'>{ /* RIGHT COLUMN */ }
                            <Link to="/"> { /* Diagnose Page Cancel Button, routes to homepage */ }
                                <Button variant="danger" type="submit" className="diagnoseCancelButton" block>Cancel</Button>
                            </Link>
                            <Link to="/diagnoseResults"> { /* Diagnose Page Continue Button, routes to diagnose Results page */ }
                                <Button variant="success" type="submit" className="diagnoseContinueButton" block>Continue</Button>
                            </Link>
                        </div>
                    </div>
                </center>
            </Container>
        </div>
    );
}

export default diagnosePage
