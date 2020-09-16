import React from 'react'

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <section className='pokemon'>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <p>Type: {type}</p>
        <p>Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
      </section>
    )
  }
}
export default Pokemon;
