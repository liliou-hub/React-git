import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css'
import Button from './component/Button';
import'./css/pokecss.css'


class App extends Component {

  constructor() {
    super();
    this.pokeClick = this.pokeClick.bind(this);

    this.state = {
      name: '',
      height: 0,
      weight: 0,
      type: '',
      id:0

    }

  };


  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
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
        // console.log('heyyy',json.id);
        // console.log('coucou',json.types[0].type.name)       
      });     
  }

  pokeClick(id){
    console.log('encore moi',this.componentDidMount(id));  
    fetch(`https://pokeres.bastionbot.org/images/pokemon/${this.setState.id}`)
  .then(res => res.json())
  .then(json => {
   
  
  });
}



  render() {
    return (
      <div className="App">
        <div className='App-header'>
        <h1>pokedex</h1>
        <Button onClick={this.pokeClick}> {this.setState.id} </Button>
        {/* <img className='poke'></img> */}
        {/* <p>Name: {this.state.name} </p>
        <p>Height: {this.state.height} m</p>
        <p>Weight: {this.state.weight} Kg</p>
        <p>Type: {this.state.type}</p> */}
        
        </div>
      </div>
    );
  }
}

export default App;
