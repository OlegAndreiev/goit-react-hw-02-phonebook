import React from 'react';

const ContactsList = props => {
  console.log(props);
  return (
    <ul>
      <li>{props.contacts.name}</li>
    </ul>
  );
};
export default ContactsList;
