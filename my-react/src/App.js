import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button variant="contained" color="primary"> Instant Doc </Button>
            
          </a>
          <Snackbar></Snackbar>
        </header>
      </div>
    );
  }
}

export default App;
