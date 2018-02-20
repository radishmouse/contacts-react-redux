import React from 'react';

import ContactDetailDisplay from './ContactDetailDisplay';
import ContactDetailEditor from './ContactDetailEditor';
import ContactDetailControls from './ContactDetailControls';

const ContactDetail = ({
  contact,
  remove,
  cancel,
  edit,
  save,
  saveNew,
  isEditing,
  isCreating,
  cancelNew,
  changeHandler
}) => {
  const contactInfo = isEditing ? <ContactDetailEditor contact={contact} changeHandler={changeHandler} isCreating={isCreating}/> : <ContactDetailDisplay contact={contact} />;

  // Show the rest of the panel if we got passed a contact *and*
  // the contact has an ID *or* we are trying to create a contact
  const detail = contact && (contact.id || isCreating) ? (
    <React.Fragment>
      {contactInfo}
      <ContactDetailControls
        id={contact.id}
        remove={remove}
        edit={edit}
        save={save}
        saveNew={saveNew}
        contact={contact}
        isEditing={isEditing}
        isCreating={isCreating}
        cancel={cancel}
        cancelNew={cancelNew}
        />
    </React.Fragment>
  ) : null;

  return (
    <React.Fragment>
      {detail}
    </React.Fragment>
  );
};


export default ContactDetail;
