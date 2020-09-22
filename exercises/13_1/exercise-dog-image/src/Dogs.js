import React from 'react';

class Dogs extends React.Component {
  constructor() {
    super();
    this.fetchImageDogs = this.fetchImageDogs.bind(this);
    this.state = {
      dogImagePath: undefined
    }
  }
  
  async fetchImageDogs() {
    const fetchData = await fetch('https://dog.ceo/api/breeds/image/random');
    const imagePath = await fetchData.json();
    this.setState({ dogImagePath: imagePath.message });
  }
  
  componentDidMount() {
    this.fetchImageDogs()
  }
  render() {
    const { dogImagePath } = this.state;
    return (
      <div>
        <button type="button" onClick={this.fetchImageDogs}>Trocar de foto</button><br />
        {(dogImagePath) ? <img src={dogImagePath} alt="" width="300px" /> : 'Loading...'}
      </div>
    );
  }
}

export default Dogs;