import { connect } from 'react-redux';
import ContactDetail from '../components/ContactDetail';

import {
  actionRemoveContact  
} from '../actions/contacts';

const mapStateToProps = (state) => {
  const contact = state.select ? state.contacts.find((c => c.id === state.select)) : {
    name: 'test',
    id: 54321,
    twitter: '@test'
  };

  console.log(contact);
  
  return {
    contact
  };
};

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => {
    dispatch(actionRemoveContact(id));
  }
});

const ContactDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDetail);

export default ContactDetailContainer;
