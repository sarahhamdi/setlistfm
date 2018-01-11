// import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// import Qs from 'qs';
// import { app } from '../helpers/setListHelpers';
// import { 
//   BrowserRouter as Router, 
//   Route, Link } from 'react-router-dom';

// App
// |
// |_ form component (uses user input to make API call)
//     |
//     |_ text component (renders results from API call)


// class Home extends React.Component {
   
//   constructor() {
//     super();
//     this.state = {
//       artistName: "",
//       concertDate: [0,1],
//       setList: []
//     }
//   }
//   componentDidMount() {
//     console.log("what", this.props.userInput)
//     axios({
//       method:'GET',
//       url: 'http://proxy.hackeryou.com',
//       dataResponse:'json',
//       paramsSerializer: (params) => {
//         return Qs.stringify(params, {arrayFormat: 'brackets'})
//       },
//       params: {
//         reqUrl: app.baseURL,
//         params: {
//           artistName: this.props.userInput,
//           sort: 'relevance'
//         }, 
//         proxyHeaders: {
//           'x-api-key': app.key,
//           Accept: 'application/json',
//         },
//         xmlToJSON: false
//       }
//     }).then((res) => {
//       console.log(res);
//       this.setState({setList: res.data.setlist});
//       console.log(this.state.setList)
//     });
//   }
  // render() {
  //   return (
  //       <div>
  //         <h2>State - SetList:</h2>
  //         <ul>
  //           {this.state.setList.map((set, i) => {
  //               return (
  //                 <li key={i}>{i} 
  //                 {set.sets.set[0].song[0].name}</li>
  //                 // need to turn this into a loop, see app.showAllSongs
  //               )
  //           })}
  //         </ul>
  //         <h2>State - ConcertDate:  {this.state.concertDate}</h2>
  //         <h2> State - Artists Name: {this.props.userInput}</h2>
  //       </div>
  //   )
  // }
}

// class Form extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       artist: "",
//       concertDate: [0,1],
//       setList: []
//     }
//     this.handleChange = this.handleChange.bind(this); 
//     this.passUserChoiceToAPI = this.passUserChoiceToAPI.bind(this);
//     // when this component loads it is going to bind these methods to the app
//     // React only does this automatically for constructor and render
//     // have to manually do this for any function you create in a component
//   }
//   handleChange(e) {
//     this.setState({
//       artist: e.target.value
//     })
//   }
//   passUserChoiceToAPI(e) {
//     e.preventDefault();
//     console.log(this.state.artist);
//     axios({
//       method:'GET',
//       url: 'http://proxy.hackeryou.com',
//       dataResponse:'json',
//       paramsSerializer: (params) => {
//         return Qs.stringify(params, {arrayFormat: 'brackets'})
//       },
//       params: {
//         reqUrl: app.baseURL,
//         params: {
//           artistName: this.state.artist,
//           sort: 'relevance'
//         }, 
//         proxyHeaders: {
//           'x-api-key': app.key,
//           Accept: 'application/json',
//         },
//         xmlToJSON: false
//       }
//     }).then((res) => {
//       console.log(res);
//       this.setState({setList: res.data.setlist});
//       console.log(this.state.setList)
//     });
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.passUserChoiceToAPI}>
//           <input type="test" name="artist" value={this.state.artist} onChange={this.handleChange}/>
//           <button>Add Todo</button>
//         </form>
//         <APICall userInput={this.state.artist} />
//       </div>
//     )
//   }
// }

