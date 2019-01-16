import React, { Component } from 'react';
import './App.css';
import './about/AboutPage';
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom"
import styles from './../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.App}>
          <Router>
            <div>
              <Routes className="navbar" />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
