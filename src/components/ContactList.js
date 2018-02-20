import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({
  contacts,
  select,
  create
}) => {
  const listItems = contacts.map( (c, i) => (
    <ContactListItem
      key={c.id}
      name={c.name}
      id={c.id}
      select={select}
      />
  ));

  return (
    <React.Fragment>
      <ul>
        {listItems}
      </ul>
      <button onClick={create}>Add New</button>
    </React.Fragment>

  );
};

export default ContactList;
