import { combineReducers } from 'redux';
import { blankContact } from '../schema';
import { 
  ADD_CONTACT,
  EDIT_CONTACT,
  REMOVE_CONTACT,
  SELECT_CONTACT,
  SET_EDITING,
  STAGE_CHANGES,
  RESET_CHANGES
} from '../actions/contacts';

const initialState = [
  {
    ...blankContact,
    id: 111,
    name: 'bob',
    number: '404-404-1234',
    twitter: '@bobloblaw'
  },
  {
    ...blankContact,    
    id: 112,
    name: 'alice',
    number: '404-404-1234',
    twitter: '@inwunderland'
  },
  {
    ...blankContact,    
    id: 113,
    name: 'carl',
    number: '404-404-1234',
    twitter: '@carlsjr'
  }  
];


const editing = (state=false, action) => {
  switch (action.type) {
  case SET_EDITING:
    return action.payload;
  default:
    return state;
  }
};


// I need for the default state to be whatever contact is selected...
const staging = (state={}, action) => {
  /*
    As changes are made to a contact while being edited,
    they are buffered in state here.
    When changes are committed, they are dispatched to
    the `contacts` reducer.
  */
  console.log(state);
  switch (action.type) {
  case STAGE_CHANGES:
    return {
      ...state,
      ...action.payload
    };
  case RESET_CHANGES:
    return {};
  default:
    return state;
  }
};

const select = (state=initialState[0].id, action) => {

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
      ...state,
      action.payload
    ];

  case EDIT_CONTACT:
    return state.map(c => (
      c.id === action.payload.id ? action.payload : c
    ));

  case REMOVE_CONTACT:
    return state.filter(c => c.id !== action.payload.id);

  default:
    return state;
  }
};

export default combineReducers({
  contacts,
  select,
  isEditing: editing,
  staging
});
