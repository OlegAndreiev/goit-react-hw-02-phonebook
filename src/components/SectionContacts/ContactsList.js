import React from 'react';

const ContactsList = props => {
  console.log(props);
  return (
    <ul id={props.contacts.id}>
      <li>{props.contacts.name}</li>
    </ul>
  );
};
export default ContactsList;
