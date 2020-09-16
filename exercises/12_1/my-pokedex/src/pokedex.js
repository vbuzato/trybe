import React, { Component } from 'react'
import Pokemon from './pokemon'
import pokemons from './data'

class Pokedex extends Component {

  constructor() {
    super();

    this.nextPokemon = this.nextPokemon.bind(this)

    this.state = {
      index: 0
    }
  }

  nextPokemon() {
    this.setState((previousState) => ({
      index: (previousState.index < pokemons.length - 1) ? previousState.index + 1 : 0
    }));
  }

  render() {
    return (
      <div className='pokedex-list'>
        <Pokemon key={pokemons[this.state.index].id} pokemon={pokemons[this.state.index]} />
        <button onClick={this.nextPokemon}>next</button>
      </div>
    );
  }
}

export default Pokedex;

{/* {this.props.pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} /> )} */}
