import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { app } from './api.js';

// const Results = (props) => {
//   return (
//     <div className="results">
//       <h2>Some Form Results</h2>
//       <p>{props.name}</p>
//     </div>
//   )
// }

// class QueryForm extends React.Component {
//   render() {
//     return (
//         <Results name="things" />
//     )
//   }
// }

class APICall extends React.Component {
  constructor() {
    super();
    this.state = {
      artistName: "",
      concertDate: [],
      setList: [],
    }
  }
  componentDidmount() {
    axios({
      method:'GET',
      url: 'http://proxy.hackeryou.com',
      dataResponse:'json',
      paramsSerializer: function(params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
      },
      params: {
        reqUrl: `${app.baseURL}setlists`,
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
      app.printAllInfo(res);
      this.setState({artistName: res});
    });
    render() {
      return (
        <div>
              <div>
                <p>{this.state.artistName}</p>
              </div>
            
        </div>
      )
    };
  }
}


// class Counter extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       featuredDonuts: ['plain', 'bannada', 'orange']
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     let counting = {count: this.state.count + 1};
//     this.setState(counting)
//   }
//   render() {
//     return (
//       <div>
//         <p>hello world. You are visitor {this.state.count}.</p>
//         {this.state.featuredDonuts.map((selected) => {
//           return <HelloAgain featuredDonuts={selected} />
//         })}
//         <button onClick={this.handleClick}>Click Me FOR REAL!!!</button>
//       </div>
//     )
//   }
// }

// class HelloAgain extends React.Component {
//   render() {
//     return (
//       <div className="hello" >
//         <p >Your featured donut is {this.props.featuredDonuts}.</p>
//       </div>
//     )
//   }
// }

// class Button extends React.Component {
//   handleClick() {
//     console.log("you clicked a button!");
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}> Click Me!!! </button>
//     )
//   }
// }
ReactDOM.render(<SetList />, document.getElementById('app'));

console.log('It works!');

app.APIRequest('Taylor Swift')