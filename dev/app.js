import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Qs from 'qs';
import { app } from './api.js';



class APICall extends React.Component {
   
  constructor() {
    super();
    this.state = {
      artistName: "Taylor Swift",
      concertDate: [0,1],
      setList: []
    }
  }
  componentDidMount() {
    axios({
      method:'GET',
      url: 'http://proxy.hackeryou.com',
      dataResponse:'json',
      paramsSerializer: (params) => {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
      },
      params: {
        reqUrl: app.baseURL,
        params: {
          artistName: "Taylor Swift",
          sort: 'relevance'
        }, 
        proxyHeaders: {
          'x-api-key': app.key,
          Accept: 'application/json',
        },
        xmlToJSON: false
      }
    }).then((res) => {
      console.log(res);
      this.setState({setList: res.data.setlist});
      console.log(this.state.setList)
    });
  }
  render() {
    return (
      <div>
        <h1>SetlistFM</h1>
        <h2>State - SetList:</h2>
        <ul>
          {this.state.setList.map((set, i) => {
              return (
                <li key={i}>{i} 
                {set.sets.set[0].song[0].name}</li>
              )
          })}
        </ul>
        <h2>State - ConcertDate:  {this.state.concertDate}</h2>
        <h2> State - Artists Name: {this.state.artistName}</h2>
      </div>
    )
  }
}


class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      artist: ""
    }
    this.handleChange = this.handleChange.bind(this); 
    this.passUserChoiceToAPI = this.passUserChoiceToAPI.bind(this);
    // when this component loads it is going to bind these methods to the app
    // React only does this automatically for constructor and render
    // have to manually do this for any function you create in a component
  }
  handleChange(e) {
    this.setState({
      artist: e.target.value
    })
  }
  passUserChoiceToAPI(e) {
    e.preventDefault();
    console.log(this.state.artist)
    // <APICall /> still need to figure this out
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input type="test" name="artist" value={this.state.artist} onChange={this.handleChange}/>
          <button onClick={this.passUserChoiceToAPI}>Add Todo</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<Form />, document.getElementById('app'));
ReactDOM.render(<APICall />, document.getElementById('api-call'))

// console.log('It works!');

// app.APIRequest('Taylor Swift')