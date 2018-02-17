import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import contacts from './reducers/contacts';
import ContactListContainer from './containers/ContactListContainer';

import ContactDetailContainer from './containers/ContactDetailContainer';

import {
  BrowserRouter as Router
} from 'react-router-dom';


import './App.css';
const REDUX_DEV = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(contacts, REDUX_DEV);
  }
  
  render() {
    return (
      <Provider store={this.store}>
        <React.Fragment>
          <ContactListContainer />
          <ContactDetailContainer />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
