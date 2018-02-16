import { combineReducers } from 'redux';

import {
  ADD_CONTACT,
  EDIT_CONTACT,
  REMOVE_CONTACT,
  SELECT_CONTACT
} from '../actions/contacts';

const initialState = [
  {
    id: 111,
    name: 'bob',
    number: '404-404-1234',
    twitter: '@bobloblaw'
  },
  {
    id: 112,
    name: 'alice',
    number: '404-404-1234',
    twitter: '@inwunderland'
  },
  {
    id: 113,
    name: 'carl',
    number: '404-404-1234',
    twitter: '@carlsjr'
  }  
];


const select = (state=null, action) => {

  switch (action.type) {
  case SELECT_CONTACT:
    return action.payload;

  default:
    return state;
  }
};

const contacts = (state=initialState, action) => {
  switch (action.type) {
  case ADD_CONTACT:
    return [
      ...state.contacts,
      action.payload
    ];

  case EDIT_CONTACT:
    return state.contacts.map(c => (
      c.id === action.payload.id ? action.payload : c
    ));

  case REMOVE_CONTACT:
    return state.contacts.filter(c => c.id !== action.payload.id);

  default:
    return state;
  }
};

export default combineReducers({
  contacts,
  select
});
