import React from 'react';

const ContactListItem = (props) => (
  <li>
    <a onClick={() => props.select(props.id)}>
      {props.name}
    </a>
  </li>
);

export default ContactListItem;
