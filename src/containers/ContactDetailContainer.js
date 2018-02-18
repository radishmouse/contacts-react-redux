import { connect } from 'react-redux';
import ContactDetail from '../components/ContactDetail';

import {
  actionRemoveContact,
  actionSetEditing,
  actionStageChanges
} from '../actions/contacts';

const mapStateToProps = (state) => {
  let contact = state.select ? state.contacts.find((c => c.id === state.select)) : {
    name: 'test',
    id: 54321,
    twitter: '@test'
  };

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
    isEditing: state.isEditing
  };
};

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => {
    dispatch(actionRemoveContact(id));
  },
  edit: (id) => {
    dispatch(actionSetEditing(id));
  },
  changeHandler: (data) => {
    dispatch(actionStageChanges(data));
  }
});

const ContactDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDetail);

export default ContactDetailContainer;
