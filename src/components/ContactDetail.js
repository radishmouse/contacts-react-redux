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
  const controls = isEditing ? <ContactDetailEditor contact={contact} changeHandler={changeHandler} /> : <ContactDetailDisplay contact={contact} />;
  const detail = contact ? (
    <div>
      {controls}
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
    </div>
  ) : null;

  return (
    <React.Fragment>
      {detail}
    </React.Fragment>
  );
};


export default ContactDetail;
