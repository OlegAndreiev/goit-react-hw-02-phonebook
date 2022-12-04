import React from 'react';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(el => (
      <li key={el.id}>
        {el.name}:{el.number}
        <button onClick={() => onDeleteContact(el.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
