import React from 'react';
import { fields as fieldNames } from '../schema';

const ContactDetail = ({contact}) => {

  const listItems = fieldNames.map((k, i) => {
    return k !== 'name' ? (<li key={i}>{k}: {contact[k]}</li>) : null;
  });
  
  return (
    <div>
      <h1>{contact.name}</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  );
};


export default ContactDetail;
