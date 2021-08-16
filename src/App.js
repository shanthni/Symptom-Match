import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

// NavBar Component: Static to the top of the screen //
import NavBar from "./components/navbar/navbar";

// Router Component: Allows user to navigate multi-page layout //
import BaseRouter from "./routes"

class App extends Component { // Start build web-Application //
  render() {
    return ( 
      <div style={{ backgroundColor: "white"}}>
        <Router>
            <NavBar>
              <BaseRouter/>
            </NavBar>
        </Router>
      </div>
    )
  }
}

export default App;