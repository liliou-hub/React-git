import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css'
import Button from './component/Button';
import'./css/pokecss.css'


class App extends Component {

  constructor() {
    super();

    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      name: '',
      height: 0,
      weight: 0,
      type: '',
      id:[]

    }

  };


  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/25')
      .then(res => res.json())
      .then(json => {
        // code
        this.setState({
          name: json.name,
          height: json.height,
          weight: json.weight,
          type: json.types[0].type.name,
          id:json.id      
        })
        console.log('heyyy',json);
        console.log('coucou',json.types[0].type.name)   
        console.log('c\est encore moi',json.id);     
      });     
  }

  handleClick(){
    
  }



  render() {
    return (
      <div className="App">
        <div className='App-header'>
        <h1>pokedex</h1>
        <img className='poke'></img>
        <p>Name: {this.state.name} </p>
        <p>Height: {this.state.height} m</p>
        <p>Weight: {this.state.weight} Kg</p>
        <p>Type: {this.state.type}</p>
        {/* <Button onClick={this.clickHere}>send</Button> */}
        </div>
      </div>
    );
  }
}

export default App;
