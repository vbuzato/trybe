import React from 'react'

const name = 'Vinicius';
const description = 'Anything'

class ComponentWhoAmI extends React.Component {
  render() {
    return (
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    )
  }
}

export default ComponentWhoAmI;