import { connect } from 'react-redux';
import ContactList from '../components/ContactList';

import {
  // actionAddContact,
  // actionEditContact,
  // actionRemoveContact
  actionSetEditing,
  actionSetCreating,
  actionSelectContact,
  actionResetChanges  
} from '../actions/contacts';

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts    
  };

};

const mapDispatchToProps = (dispatch) => ({
  select: id => {    
    dispatch(actionSelectContact(id));
    dispatch(actionSetEditing(false));    
    dispatch(actionResetChanges());        
  },
  create: () => {
    dispatch(actionSelectContact(0));    
    dispatch(actionSetCreating(true));
    dispatch(actionSetEditing(true));        
  }
  // add: payload => dispatch(actionAddContact()),
  // edit: (...args) => dispatch(actionEditContact(...args)),
  // remove: (...args) => dispatch(actionRemoveContact(...args))
});

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);

export default ContactListContainer;
