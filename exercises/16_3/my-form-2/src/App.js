import React from 'react';
import Form from './components/form'
import './App.css';
import { Provider } from 'react-redux';
import store from './components/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Form />
      </Provider>
    </div>
  );
}

export default App;
