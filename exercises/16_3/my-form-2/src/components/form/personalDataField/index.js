import React from 'react';
import { connect } from 'react-redux';
import { addData } from  '../../actions';

class PersonalDataField extends  React.Component {
  constructor() {
    super()
    this.emailCheck = this.emailCheck.bind(this)

    this.state = {
      warningMsg: false
    }
  }

  emailCheck(value) {
    // Font: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!value.match(emailCheck) && value !== '') alert('E-mail inválido');  
  }

  render() {
    const { add, name, email, cpf, address, city, state } = this.props;
    const states = ['','AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
    

    return (
      <fieldset className="dataField">
        <label>
          Nome:
          <input name="name" type="text" maxLength="40" onChange={({ target }) => add(target.name, target.value)} value={name} required />
        </label>
        <label>
          E-mail:
          <input name="email" type="text" maxLength="50" onChange={({ target }) => add(target.name, target.value)} value={email} onBlur={() => this.emailCheck(email)} required />
        </label>
        <label>
          CPF:
          <input name="cpf" type="text" maxLength="11" onChange={({ target }) => add(target.name, target.value)} value={cpf} required />
        </label>
        <label>
          Endereço:
          <input name="address" type="text" maxLength="200" onChange={({ target }) => add(target.name, target.value)} value={address} required />
        </label>
        <label>
          Cidade:
          <input name="city" type="text" maxLength="28" onChange={({ target }) => add(target.name, target.value)} value={city} required /> {/* onBlur={() => checkNameCity(city)}  */}
        </label>
        <label>
          Estado:
          <select name="state" type="select" onChange={({ target }) => add(target.name, target.value)} value={state} required>
            {states.map((state) => <option key={state} value={state}>{state}</option>)}
          </select>
        </label>
      </fieldset>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.addToState.name,
  email: state.addToState.email,
  cpf: state.addToState.cpf,
  address: state.addToState.address,
  city: state.addToState.city,
  state: state.addToState.state,
});

const mapDispatchToProps = (dispatch) => ({
  add: (name, value) => dispatch(addData(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDataField);


