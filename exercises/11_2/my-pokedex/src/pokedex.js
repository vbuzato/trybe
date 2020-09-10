import React, { Component } from 'react'
import pokemons from './data'
import Pokemon from './pokemon'

class Pokedex extends Component {
  render() {
    return (
      <div className='pokedex-list'>
      {pokemons.map((pokemon, index) => {
        const { id, name, type, averageWeight, image} = pokemons;
        return <Pokemon 
          key={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          averageWeight={pokemon.averageWeight}
          image={pokemon.image} /> ;
      })}
    </div>
    );
  }
}

export default Pokedex;

