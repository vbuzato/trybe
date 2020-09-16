import React, { Component } from 'react'
import Pokemon from './pokemon'
import pokemons from './data'

class Pokedex extends Component {

  constructor() {
    super();

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPoke = this.filterPoke.bind(this);

    this.state = {
      index: 0,
      type: 'All'
    };
  }
  
  nextPokemon(filteredPokemons) {
    this.setState((previousState) => ({
      index: (previousState.index < filteredPokemons.length - 1) ? previousState.index + 1 : 0
    }));
  }
  
  filterPoke(type) {
    this.setState((previousState) => ({
      index: 0,
      type: type
    }));
  }
  
  render() {
    const filteredPokemons = ((this.state.type === 'All') ? pokemons
      : pokemons.filter((pokemon) => this.state.type === pokemon.type));
      
    return (
      <div className='pokedex-list'>
        <Pokemon key={filteredPokemons[this.state.index].id} pokemon={filteredPokemons[this.state.index]} />
        <div>
          <button onClick={() => this.filterPoke('All')}>All</button>
          <button onClick={() => this.filterPoke('Fire')}>Fire</button>
          <button onClick={() => this.filterPoke('Psychic')}>Psychic</button>
        </div>
        <button onClick={() => this.nextPokemon(filteredPokemons)}>next</button>
      </div>
    );
  }
}

export default Pokedex;
