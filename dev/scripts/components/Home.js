import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Qs from 'qs';
import { helpers } from '../helpers/setListHelpers';
import DisplayResults from './DisplayResults';
import { DisplayMap, Markers } from './DisplayMap'

class Home extends React.Component {
   
  constructor() {
    super();
    this.state = {
      error: 0,
      artist: "",
      setList: [],
      coords: []
    }
    this.handleChange = this.handleChange.bind(this); 
    this.makeAPICall = this.makeAPICall.bind(this);
    this.catch = this.catch.bind(this);
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
    // make SetListAPI call using helper fn getSetListData
    helpers
      .getSetListData(this.state.artist)
        // when successful:
      .then((res) => {
        console.log(res.data)
        this.setState({
          setList: res.data.setlist,
          coords: res.data.setlist.map((set) => {
            const venueArray = [set.venue.city.coords.lat, set.venue.city.coords.long]
            return venueArray;
          })
        });
        
        helpers.artistConcertDate(res);
      })
        // error handling:
      .catch((err) => {
        console.log(this.state.error)
        this.setState({
          error: 1,
          setList: [],
          coords: []
        });
        
    });
  }
  catch() {

  }
  render() {
    return (
      <div>
        <form onSubmit={this.makeAPICall}>
          <input type="test" name="artist" value={this.state.artist} onChange={this.handleChange}/>
          <button>Find Setlists!</button>
        </form>

        <div className="google-map">
          <DisplayMap venueCoords={this.state.coords}/>
        </div>
        <DisplayResults 
        newArtist={this.state.artist} 
        newSetList={this.state.setList}
        errorOccured={this.state.error}/>
      </div>
    )
  }
}

export default Home;