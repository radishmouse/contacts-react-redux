import React from 'react';

const ContactDetailControls = ({
  isEditing,
  edit,
  remove,
  id
}) => {

  const editButton = isEditing ? <button onClick={() => edit(false)}>Cancel</button> : <button onClick={() => edit(id)}>Edit</button>;
  const saveButton = isEditing ? <button onClick={() => console.log('looks like you want to save, bro')}>Save</button> : null;
  const deleteButton = isEditing ? null : <button onClick={() => remove(id)}>Remove</button>;
  return (
    <div>
      {saveButton}
      {editButton}
      {deleteButton}      
    </div>
  );
};


export default ContactDetailControls;
