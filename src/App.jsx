import React, { Component } from 'react';
import './App.css';
import './about/AboutPage';
import './../node_modules/bootstrap/dist/css/bootstrap.css' 
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom"
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
          <Router>
            <div>
              <Routes className="navbar" />
            </div>
          </Router>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
