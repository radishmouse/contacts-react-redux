import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = (props) => {
  const listItems = props.contacts.map( (c, i) => (
    <ContactListItem
      key={c.id}
      name={c.name}
      id={c.id}
      select={props.select}
      />
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default ContactList;
