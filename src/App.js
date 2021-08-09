import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

// NavBar
import NavBar from "./components/navbar/navbar";

// router
import BaseRouter from "./routes"

class App extends Component {
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