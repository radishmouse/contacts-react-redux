import { connect } from 'react-redux';
import ContactDetail from '../components/ContactDetail';

import {
  actionSelectContact
} from '../actions/contacts';

const mapStateToProps = (state) => {
  const contact = state.select ? state.contacts.find((c => c.id === state.select)) : {
    name: 'test',
    id: 54321,
    twitter: '@test'
  };
  
  return {
    contact
  };
};

const ContactDetailContainer = connect(
  mapStateToProps
)(ContactDetail);

export default ContactDetailContainer;
