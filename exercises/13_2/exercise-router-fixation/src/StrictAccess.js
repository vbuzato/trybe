import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const { user } = this.props
    const accessDenied = () => {
      alert('Access Denied');
      return <Redirect to="/" />;
    }

    return (
      <div>
        {(user.username === "joao1" && user.password === "1234") ? <p>Welcome João!</p> : accessDenied()}
      </div>
    );
  }
}

export default StrictAccess;

// alert('Access Denied') 