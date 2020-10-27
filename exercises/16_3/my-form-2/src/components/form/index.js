import React from 'react'
import './style.css'
import PersonalDataField from './personalDataField'
import LastJobInfo from './lastJobInfo'
import { connect } from 'react-redux'
import { stateClean } from '../actions'

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.showData = this.showData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ 
      [name]: (name === 'name') ? value.toUpperCase() : value 
    });
  }

  showData(state){
    let data = JSON.stringify(state.addToState);
    data = data
      .replace('{', '')
      .replace('}', '')
      .replace(/"/g, '')
      .replace(/,/g, '<br />')
      .replace(/:/g, ': ')
    document.querySelector('.result').innerHTML = data;
  }

  deleteData() {
    const { deleteAll } = this.props;
    document.querySelector('.result').innerHTML = '';
    deleteAll();
  }

  render() {
    const { state } = this.props;
    return (
      <form>
        <PersonalDataField />
        <LastJobInfo />
        <div className="buttons">
          <button type="button" onClick={() => this.showData(state)}>Ver dados</button>
          <button type="button" onClick={this.deleteData}>Limpar</button>
        </div>
        <div className="result"></div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(stateClean())
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);