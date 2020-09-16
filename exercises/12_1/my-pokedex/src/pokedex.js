import React, { Component } from 'react'
import Pokemon from './pokemon'
import pokemons from './data'

class Pokedex extends Component {
  render() {
    return (
      <div className='pokedex-list'>
      {/* {this.props.pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} /> )} */}
      <Pokemon key={pokemons[0].id} pokemon={pokemons[0]} />
    </div>
    );
  }
}

export default Pokedex;

