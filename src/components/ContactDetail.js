import React from 'react';

import ContactDetailDisplay from './ContactDetailDisplay';
import ContactDetailControls from './ContactDetailControls';

const ContactDetail = ({
  contact,
  remove
}) => {

  const detail = contact ? (
    <div>
      <ContactDetailDisplay contact={contact} />
      <ContactDetailControls id={contact.id} remove={remove} />
    </div>
  ) : null;

  return (
    <React.Fragment>
      {detail}
    </React.Fragment>
  );
};


export default ContactDetail;
