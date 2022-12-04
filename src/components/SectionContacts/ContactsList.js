import React from 'react';
import PropTypes from 'prop-types';
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

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
