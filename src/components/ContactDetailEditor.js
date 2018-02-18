import React from 'react';

const extractNameAndValueFromEvent = (e) => ({[e.target.name]: e.target.value});

const ContactDetailEditor = ({
  contact,
  changeHandler
}) => {
  const sendValueToHandler = e => changeHandler(extractNameAndValueFromEvent(e));
  
  const fields = Object.keys(contact)
        .filter(k => !(/name|id/.test(k)))
        .map((k, i) => (<input key={i} onChange={sendValueToHandler} name={k} value={contact[k]}/>));
  
  return (
    <div>
      <h1>{contact.name}</h1>
      {fields}
    </div>
  );
};




export default ContactDetailEditor;
