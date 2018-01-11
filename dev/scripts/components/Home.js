import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Qs from 'qs';
import { helpers } from '../helpers/setListHelpers';
import DisplayResults from './DisplayResults'

class Home extends React.Component {
   
  constructor() {
    super();
    this.state = {
      artist: "",
      concertDate: [0,1],
      setList: []
    }
    this.handleChange = this.handleChange.bind(this); 
    this.makeAPICall = this.makeAPICall.bind(this);
    // when this component loads it is going to bind these methods to the app
    // React only does this automatically for constructor and render
    // have to manually do this for any function you create in a component
  }
  handleChange(e) {
    this.setState({
      artist: e.target.value
    })
  }
  makeAPICall(e) {
    e.preventDefault();
    console.log(this.state.artist);
    axios({
      method:'GET',
      url: 'http://proxy.hackeryou.com',
      dataResponse:'json',
      paramsSerializer: (params) => {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
      },
      params: {
        reqUrl: helpers.baseURL,
        params: {
          artistName: this.state.artist,
          sort: 'relevance'
        }, 
        proxyHeaders: {
          'x-api-key': helpers.key,
          Accept: 'application/json',
        },
        xmlToJSON: false
      }
    }).then((res) => {
      console.log(res);
      this.setState({setList: res.data.setlist});
      helpers.artistConcertDate(res);
      
      console.log(this.state.setList)
      // this.passInfoToChild;
    });
  }
  render() {
    // should it be onSubmit={this.makeAPICall} called on the Form element
    // or onClick={this.makeAPICall} called on the Button element
    return (
      <div>
        <form onSubmit={this.makeAPICall}>
          <input type="test" name="artist" value={this.state.artist} onChange={this.handleChange}/>
          <button>Submit</button>
        </form>

          
        <DisplayResults 
          newArtist={this.state.artist} 
          newSetList={this.state.setList}/>
        
      </div>
    )
  }
}

export default Home;