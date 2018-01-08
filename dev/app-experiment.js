import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1 className="greeting">Fact: The best ninja turtle is Dosdfsdfnatello <input type="text" /></h1>,
   document.getElementById('app'));


class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      featuredDonuts: ['plain', 'bannada', 'orange']
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let counting = {count: this.state.count + 1};
    this.setState(counting)
  }
  render() {
    return (
      <div>
        <p>hello world. You are visitor {this.state.count}.</p>
        {this.state.featuredDonuts.map((selected) => {
          return <HelloAgain featuredDonuts={selected} />
        })}
        <button onClick={this.handleClick}>Click Me FOR REAL!!!</button>
      </div>
    )
  }
}

class HelloAgain extends React.Component {
  render() {
    return (
      <div className="hello">
        <p>Your featured donut is {this.props.featuredDonuts}.</p>
      </div>
    )
  }
}


class Button extends React.Component {
  handleClick() {
    console.log("you clicked a button!");
  }
  render() {
    return (
      <button onClick={this.handleClick}> Click Me!!! </button>
    )
  }
}
ReactDOM.render(<Counter />, document.getElementById('app'));


class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: ["Buy Milk", "Buy Cheese"],
      todo: ""
    }
    this.handleChange = this.handleChange.bind(this); 
    this.addTodo = this.addTodo.bind(this);
    // when this component loads it is going to bind these methods to the app
    // React only does this automatically for constructor and render
    // have to manually do this for any function you create in a component
  }
  handleChange(e) {
    this.setState({
      todo: e.target.value
    })
  }
  addTodo(e) {
    e.preventDefault();
    console.log("add todod is working")
    // we want to make a copy of our state and go from there, pattern
    // todoState copies this state and adds it to an array
    // different than .push() because doesn't trigger a re-render
    const todoState = Array.from(this.state.todos);
    todoState.push(this.state.todo)
    this.setState({
      todos: todoState
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input type="test" name="todo" value={this.state.todo} onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
        <ul>
          {this.state.todos.map((todo, i) => {
            return <li key={`todo-${i}`}>{todo}</li>
          })}
        </ul>
      </div>
    )
  }
}


console.log('It works!');