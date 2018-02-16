import { connect } from 'react-redux';
import ContactList from '../components/ContactList';

import {
  // actionAddContact,
  // actionEditContact,
  // actionRemoveContact
  actionSelectContact
} from '../actions/contacts';

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts    
  };

};

const mapDispatchToProps = (dispatch) => ({
  select: id => dispatch(actionSelectContact(id))
  // add: payload => dispatch(actionAddContact()),
  // edit: (...args) => dispatch(actionEditContact(...args)),
  // remove: (...args) => dispatch(actionRemoveContact(...args))
});

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);

export default ContactListContainer;
