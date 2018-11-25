import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SimpleSnackbar from './SimpleSnackbar.js';
import SpeedDials from './SpeedDials.js';
import ChipsArray from './ChipsArray.js';

class App extends Component {
  render() {
    return (
      <ChipsArray></ChipsArray>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.chifranciscan.org/find-a-doctor/details.physician.42d59f97-e948-4914-b77a-20efd5474f49.html"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button variant="contained" color="primary"> Instant Doc </Button>
            
          </a>
          <SimpleSnackbar></SimpleSnackbar>
          <SpeedDials></SpeedDials>
        </header>
      </div>
    );
  }
}

export default App;
