import React from 'react';

class Dogs extends React.Component {
  constructor() {
    super();
    this.fetchImageDogs = this.fetchImageDogs.bind(this);
    this.state = {
      dogImagePath: undefined,
      breed: undefined
    }
  }

  capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  async fetchImageDogs() {
    const fetchData = await fetch('https://dog.ceo/api/breeds/image/random');
    const imagePath = await fetchData.json();
    const erro = 'https://www.dronekids.com.br/wp-content/uploads/2018/08/proibido-importar1.jpg';
    const dogBreed = imagePath.message.split('/')[4];
    this.setState({ 
      dogImagePath: (!imagePath.message.includes('terrier')) ? imagePath.message : erro,
      breed: this.capitalizeName(dogBreed)
    });
  }
  
  componentDidMount() {
    this.fetchImageDogs()
  }

  componentDidUpdate() {
    localStorage.setItem('lastURL', this.state.dogImagePath);
  }

  render() {
    const { dogImagePath, breed } = this.state;
    return (
      <article className="dogInfo">
        <button type="button" onClick={this.fetchImageDogs}>Trocar de foto</button>
        <span className="breed">Raça: {breed}</span>
        {(dogImagePath) ? <img src={dogImagePath} alt="" width="300px" /> : 'Loading...'}
      </article>
    );
  }
}

export default Dogs;