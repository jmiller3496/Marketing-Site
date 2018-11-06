import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import './about/AboutPage';
import HeaderBar from './master/Header';
import Routes from "./Routes";
import { BrowserRouter as Router, Link } from "react-router-dom"
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
