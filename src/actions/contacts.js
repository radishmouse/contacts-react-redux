export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const SELECT_CONTACT = 'SELECT_CONTACT';
export const SET_EDITING = 'SET_EDITING';
export const STAGE_CHANGES = 'STAGE_CHANGES';
export const RESET_CHANGES = 'RESET_CHANGES';

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

export const actionEditContact = (data) => ({
  type: EDIT_CONTACT,
  payload: {
    ...data
  }
});

export const actionRemoveContact = (id) => ({
  type: REMOVE_CONTACT,
  payload: {
    id
  }
});

export const actionSelectContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id
});

export const actionSetEditing = (isEditing) => ({
  type: SET_EDITING,
  payload: isEditing
});

export const actionStageChanges = (data) => ({
  type: STAGE_CHANGES,
  payload: data
});

export const actionResetChanges = () => ({
  type: RESET_CHANGES
})
