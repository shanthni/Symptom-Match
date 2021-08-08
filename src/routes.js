import React from 'react'
import HomePage from "./pages/home/home"
import registerPage from "./pages/register/register";
import LoginPage from "./pages/login/login";
import settingsPage from "./pages/settings/settings";

import aboutPage from "./pages/about/about";
import diagnosePage from "./pages/diagnose/diagnose";
import contactPage from "./pages/contact/contact";
import profilePage from "./pages/profile/profile";

import diagnoseResultsPage from "./pages/diagnoseResults/diagnoseResults";

import forgotPasswordPage from "./pages/forgotPassword/forgotPassword";

import { Route } from "react-router-dom";


const BaseRouter = () => (
    <div>
        <Route exact path="/" render={(props) => <HomePage {...props}/>}/>
        <Route exact path="/register" component={registerPage}/>
        <Route exact path="/login" component={LoginPage}/>

        <Route exact path="/settings" component={settingsPage}/>
        <Route exact path="/about" component={aboutPage}/>
        <Route exact path="/diagnose" component={diagnosePage}/>
        <Route exact path="/contact" component={contactPage}/>
        <Route exact path="/profile" component={profilePage}/>
        <Route exact path="/diagnoseResults" component={diagnoseResultsPage}/>
        <Route exact path="/forgotPassword" component={forgotPasswordPage}/>

    </div>
)

export default BaseRouter