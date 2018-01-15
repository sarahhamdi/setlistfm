import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import { 
  BrowserRouter as Router, 
  Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Setlist FM</h1>
        <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))