import React from 'react'

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
    const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!value.match(emailCheck) && value !== '') alert('E-mail inválido');  
  }

  render() {
    const { handleChange, value, checkNameCity } = this.props;
    const states = ['','AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
    

    return (
      <fieldset className="dataField">
        <label>
          Nome:
          <input name="name" type="text" maxLength="40" onChange={handleChange} value={value.name} required />
        </label>
        <label>
          E-mail:
          <input name="email" type="text" maxLength="50" onChange={handleChange} value={value.email} onBlur={() => this.emailCheck(value.email)} required />
        </label>
        <label>
          CPF:
          <input name="cpf" type="text" maxLength="11" onChange={handleChange} value={value.cpf} required />
        </label>
        <label>
          Endereço:
          <input name="address" type="text" maxLength="200" onChange={handleChange} value={value.address} required />
        </label>
        <label>
          Cidade:
          <input name="city" type="text" maxLength="28" onChange={handleChange} value={value.city} onBlur={() => checkNameCity(value.city)} required />
        </label>
        <label>
          Estado:
          <select name="state" type="select" onChange={handleChange} value={value.state} required>
            {states.map((state) => <option value={state}>{state}</option>)}
          </select>
        </label>
      </fieldset>
    )
  }
}

export default PersonalDataField;


