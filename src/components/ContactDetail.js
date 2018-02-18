import React from 'react';

import ContactDetailDisplay from './ContactDetailDisplay';
import ContactDetailEditor from './ContactDetailEditor';
import ContactDetailControls from './ContactDetailControls';

const ContactDetail = ({
  contact,
  remove,
  edit,
  save,
  isEditing,
  changeHandler
}) => {
  const controls = isEditing ? <ContactDetailEditor contact={contact} changeHandler={changeHandler} /> : <ContactDetailDisplay contact={contact} />;
  const detail = contact ? (
    <div>
      {controls}
      <ContactDetailControls id={contact.id} remove={remove} edit={edit} save={save} contact={contact} isEditing={isEditing}/>
    </div>
  ) : null;

  return (
    <React.Fragment>
      {detail}
    </React.Fragment>
  );
};


export default ContactDetail;
