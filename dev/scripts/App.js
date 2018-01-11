import React from 'react';
import ReactDOM from 'react-dom';
import Home from './componenets/Home'
import { 
  BrowserRouter as Router, 
  Route, Link } from 'react-router-dom';
// import Home from './componenets/Home';

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