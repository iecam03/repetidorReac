import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    repetidor: ""
  }
  change = (event)=>{
    console.log(event.target.value)
    var repit = this.state.repetidor
    repit = event.target.value
    this.setState({repetidor:repit})
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.change} placeholder="Empieza a escribir algo" />
    <p className="repeater">{this.state.repetidor}</p>
      </div>
    );
  }
}

export default App;
