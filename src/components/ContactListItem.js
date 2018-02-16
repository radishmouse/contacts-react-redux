import React from 'react';

const ContactListItem = (props) => (
  <li onClick={() => props.select(props.id)}>
    {props.id}
  </li>
);

export default ContactListItem;
