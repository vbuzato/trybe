import React from 'react';
import { connect } from 'react-redux';
import { addData } from '../../actions';

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
    const { add, resume, hole, jobdescription } = this.props;
    
    return (
      <fieldset className="dataField">
        <label>
          Resumo do currículo:
          <textarea name="resume" type="textarea" maxLength="1000" onChange={({ target }) => add(target.name, target.value)} value={resume} required />
        </label>
        <label>
          Cargo:
          <textarea name="hole" type="textarea" maxLength="50" onChange={({ target }) => add(target.name, target.value)} value={hole} onMouseEnter={this.warning} required />
        </label>
        <label>
          Descrição do cargo:
          <input name="jobdescription" type="text" maxLength="500" onChange={({ target }) => add(target.name, target.value)} value={jobdescription} required />
        </label>
      </fieldset>
    )
  }
}

const mapStateToProps = (state) => ({
  resume: state.addToState.resume,
  hole: state.addToState.hole,
  jobdescription: state.addToState.jobdescription,
});

const mapDispatchToProps = (dispatch) => ({
  add: (name, value) => dispatch(addData(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(LastJobInfo);