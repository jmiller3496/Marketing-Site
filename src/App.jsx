import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import './about/AboutPage';
import AboutPage from './about/AboutPage';
import Routes from "./Routes";
import { Button, Grid, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Link } from "react-router-dom"
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
          <Router>
            <Routes className="navbar" />
          </Router>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
