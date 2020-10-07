import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css'
import Button from './component/Button';
import './css/pokecss.css'
import Card from './component/Card';


class App extends Component {

  constructor() {
    super();
    this.pokeClick = this.pokeClick.bind(this);
    this.subPokemon = this.subPokemon.bind(this);

    this.state = {
      name: '',
      height: 0,
      weight: 0,
      type: '',
      id: '',
      pokeList: ['']

    }

  };
  componentDidMount() {
    this.choKapik('1')
  }


  choKapik(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(json => {

        this.setState({
          name: json.name,
          height: json.height,
          weight: json.weight,
          type: json.types[0].type.name,
          id: json.id
        })
        // console.log('heyyy',json.id);
        // console.log('coucou',json.types[0].type.name)       
      });
  }

  pokeClick() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          // id: json.results[0].url['id'],
          pokeList: json.results
        })
        // console.log('bojouuuuuu',json.results[0].url['id']);
        console.log(json.results);


      });
  }

  subPokemon() {
    console.log('hiiiiiiiiii', this.state)
    return this.state.pokeList.map((id) => {

      return <img onClick={this.subPokemon} src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />

    })

  }



  render() {

    return (
      <div className="App">
        <div>
          <h1>pokedex</h1>

          <img className='poke' src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`}></img>
          <Card
            name={this.state.name}
            height={this.state.height} m
            weight={this.state.weight} Kg
            type={this.state.type}>
            {this.state}</Card>
        </div>

        <div>
          <h2>listes des pokemons</h2>
          <p>{this.subPokemon()} pokemon ou etes vouuus</p>
          <Button onClick={this.pokeClick} >
            <img className='poke' src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`} ></img>
            {this.state.id}tous les pokemons doivent etre la
           </Button>


        </div>
      </div>
    );
  }
}

export default App;
