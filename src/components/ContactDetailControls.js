import React from 'react';

const ContactDetailControls = (props) => (
  <div>

    <button onClick={() => {
        console.log('this is just a link to the editing screen');
      }}>Edit</button>
    <button onClick={() => props.remove(props.id)}>Remove</button>
  </div>
);

export default ContactDetailControls;
