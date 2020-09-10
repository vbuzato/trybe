import React from 'react'

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image} = this.props;
    return (
      <section className='pokemon'>
        <h3>{name}</h3>
        <img src={image} />
        <p>Type: {type}</p>
        <p>Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
      </section>
    )
  }
}
export default Pokemon;
