import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/grid'
import Road from './components/road'

class App extends Component {
  render() {
    var col = 70, row = 70, height = 700, width = 700
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{marginLeft: 20}}>
          <Grid col={col} row={row} width={width} height={height}>
            <Road col={col} row={row} paths={getrandPath(col, row)}></Road>
          </Grid>
        </div>
      </div>
    );
  }
}

function getrandPath (col, row) {
  var paths = []
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      var rd = rand(col, row)
      paths.push(rd)
    }
  }
  return paths
}
function rand(col, row) {
  return {
    x: Math.round(Math.random() * col),
    y: Math.round(Math.random() * row)
  }
}

export default App;
