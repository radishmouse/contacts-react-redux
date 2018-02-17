import React from 'react';

const ContactListItem = (props) => (
  <li onClick={() => props.select(props.id)}>
    {props.name}
  </li>
);

export default ContactListItem;
