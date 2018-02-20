import React from 'react';

const ContactDetailControls = ({
  isEditing,
  isCreating,
  edit,
  remove,
  save,
  saveNew,
  cancelNew,
  id,
  contact
}) => {

  const editButton = isEditing ? <button onClick={() => {
    if (isCreating) {
      cancelNew();
    } else {
      edit(false);
    }
  }}>Cancel</button> : <button onClick={() => edit(id)}>Edit</button>;
  const saveButton = isEditing ? <button onClick={() => {
    if (isCreating) {
      saveNew(contact);
    } else {      
      save(contact);
    }
  }}>Save</button> : null;
  const deleteButton = isEditing ? null : <button onClick={() => remove(id)}>Remove</button>;
  return (
    <div className="detail-controls">
      {saveButton}
      {editButton}
      {deleteButton}      
    </div>
  );
};


export default ContactDetailControls;
