import React from 'react';
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom"
import styles from './../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

function App () {
    return (
      <div className="App" style={styles.App}>
          <Router>
            <>
              <Routes className="navbar" />
            </>
          </Router>
      </div>
    );
}

export default App;
