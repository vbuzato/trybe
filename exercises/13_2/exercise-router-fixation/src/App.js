import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
      <Link to="/strict-access">Strict Access</Link>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
          <Route path="/strict-access" render={() => <StrictAccess user={ {username: "joao", password: "1234"} } /> } />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;