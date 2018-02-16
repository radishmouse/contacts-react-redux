export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const SELECT_CONTACT = 'SELECT_CONTACT';

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

export const actionAddContact = (name) => ({
  type: ADD_CONTACT,
  payload: {
    name,
    id: uuidv4()
  }
});

export const actionEditContact = (name, id) => ({
  type: EDIT_CONTACT,
  payload: {
    name,
    id
  }
});

export const actionRemoveContact = (name, id) => ({
  type: REMOVE_CONTACT,
  payload: {
    name,
    id
  }
});

export const actionSelectContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id
});