import React from 'react'
import './style.css'
import PersonalDataField from './personalDataField'
import LastJobInfo from './lastJobInfo'

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.checkNameCity = this.checkNameCity.bind(this)
    this.showData = this.showData.bind(this)
    this.deleteData = this.deleteData.bind(this)

    this.state = {
      name: "",
      email: "",
      cpf: "",
      address: "",
      city: "",
      state: "",
      resume: "",
      hole: "",
      jobdescription: "",
    }
  }

  checkNameCity(city) {
    if (city.match(/^[0-9]/)) {
      this.setState({ 
        city: "" 
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ 
      [name]: (name === 'name') ? value.toUpperCase() : value 
    });
  }

  showData(){
    let data = JSON.stringify(this.state);
    data = data
      .replace('{', '')
      .replace('}', '')
      .replace(/"/g, '')
      .replace(/,/g, '<br />')
    document.querySelector('.result').innerHTML = data;
  }

  deleteData() {
    document.querySelector('.result').innerHTML = '';
    this.setState({
      name: "",
      email: "",
      cpf: "",
      address: "",
      city: "",
      state: "",
      resume: "",
      hole: "",
      jobdescription: "",
    })
  }

  render() {
    return (
      <form>
        <PersonalDataField 
          checkNameCity={this.checkNameCity}
          handleChange={this.handleChange} 
          value={this.state}
        />
        <LastJobInfo 
          handleChange={this.handleChange} 
          value={this.state} 
        />
        <div className="buttons">
          <button type="button" onClick={this.showData}>Ver dados</button>
          <button type="button" onClick={this.deleteData}>Limpar</button>
        </div>
        <div className="result"></div>
      </form>
    );
  }
}

export default Form;