import React from 'react'

class LastJobInfo extends  React.Component {
  constructor() {
    super()
    this.warning = this.warning.bind(this)

    this.state = {
      warningMsg: false
    }
  }

  warning() {
    if (this.state.warningMsg === false) {
      alert('Preencha com cuidado esta informação.')
      this.setState({ warningMsg: true })
    }
  }

  render() {
    const { handleChange, value } = this.props;
    
    return (
      <fieldset className="dataField">
        <label>
          Resumo do currículo:
          <textarea name="resume" type="textarea" maxLength="1000" onChange={handleChange} value={value.resume} required />
        </label>
        <label>
          Cargo:
          <textarea name="hole" type="textarea" maxLength="50" onChange={handleChange} value={value.hole} onMouseEnter={this.warning} required />
        </label>
        <label>
          Descrição do cargo:
          <input name="jobdescription" type="text" maxLength="500" onChange={handleChange} value={value.jobdescription} required />
        </label>
      </fieldset>
    )
  }
}

export default LastJobInfo;