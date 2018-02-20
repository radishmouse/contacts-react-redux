import React from 'react';
import { fields as fieldNames } from '../schema';

const extractNameAndValueFromEvent = (e) => ({[e.target.name]: e.target.value});

const ContactDetailEditor = ({
  contact,
  changeHandler,
  isCreating
}) => {
  const sendValueToHandler = e => changeHandler(extractNameAndValueFromEvent(e));
  
  const fields = fieldNames
        .filter(k => !(/id/.test(k)))
        .map((k, i) => (
          <div key={i} className="fieldset">
            <label> {k}: </label>
            <input onChange={sendValueToHandler} name={k} value={contact[k]}/>
          </div>
        ));
  const label = isCreating ? 'Add New' : 'Edit';
  
  return (
    <div>
      <h1>{label} Contact</h1>
      {fields}
    </div>
  );
};




export default ContactDetailEditor;
