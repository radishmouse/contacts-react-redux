import React from 'react';
import { fields as fieldNames } from '../schema';

const extractNameAndValueFromEvent = (e) => ({[e.target.name]: e.target.value});

const ContactDetailEditor = ({
  contact,
  changeHandler
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
  
  return (
    <div>
      <h1>Edit Contact</h1>
      {fields}
    </div>
  );
};




export default ContactDetailEditor;
