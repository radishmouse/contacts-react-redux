import { connect } from 'react-redux';
import ContactDetail from '../components/ContactDetail';
import { blankContact } from '../schema';

import {
  actionSelectContact,
  actionRemoveContact,
  actionSetEditing,
  actionSetCreating,
  actionAddContact,
  actionEditContact,
  actionStageChanges,
  actionResetChanges
} from '../actions/contacts';

const mapStateToProps = (state) => {
  let contact = state.select ? state.contacts.find((c => c.id === state.select)) : blankContact;

  // If there's something in the "staging" area and we are in editing mode,
  // we'll send that instead of what's saved in state.contacts
  if (state.isEditing && Object.keys(state.staging).length > 0) {
    contact = {
      ...contact,
      ...state.staging
    };
  }
  
  return {
    contact,
    isEditing: state.isEditing,
    isCreating: state.isCreating
  };
};

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => {
    dispatch(actionRemoveContact(id));
  },
  edit: (id) => {
    dispatch(actionSetEditing(id));
  },
  cancel: () => {
    // currently unused.
    // it's nice to be able to edit again if you cancel by accident
    // and all the previous input still be there.
  },
  cancelNew: () => {    
    dispatch(actionSetEditing(false));
    dispatch(actionSetCreating(false));    
    dispatch(actionResetChanges());
  },
  changeHandler: (data) => {
    dispatch(actionStageChanges(data));
  },
  save: (data) => {
    // console.log('we will save this:');
    // console.log(data);
    // if this works, we can dispatch to actionEditContact with data as the payload
    dispatch(actionEditContact(data));
    dispatch(actionSetEditing(false));
    dispatch(actionResetChanges());    
  },
  saveNew: (data) => {
    dispatch(actionAddContact(data));
    dispatch(actionSetEditing(false));
    dispatch(actionSetCreating(false));        
    dispatch(actionResetChanges());
  }
});

const ContactDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDetail);

export default ContactDetailContainer;
