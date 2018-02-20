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

  const doCancel = isCreating ? cancelNew : () => edit(false);
  const doSave = isCreating ? saveNew : save;
  
  const editButton = isEditing ? <button onClick={doCancel}>Cancel</button> : <button onClick={() => edit(id)}>Edit</button>;
  const saveButton = isEditing ? <button onClick={() => doSave(contact)}>Save</button> : null;
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
