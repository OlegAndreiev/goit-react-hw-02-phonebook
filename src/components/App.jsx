import React from 'react';
import Form from './SectionForm/Form';
import SectionForm from './SectionForm/SectionForm';
import SectionContacts from './SectionContacts/SectionContacts';
import ContactList from './SectionContacts/ContactsList';
import Filter from './SectionContacts/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };
  formSubmitHandler = data => {
    console.log(data);
    this.setState({
      contacts: [
        ...this.state.contacts,
        { id: data.id, name: data.name, number: data.number },
      ],
    });
  };

  deleteContact = toDeleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== toDeleteId),
    }));
  };

  filterForContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { numbers, filter } = this.state;
    const filteredContacts = this.filteredContacts();
    return (
      <>
        <SectionForm title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </SectionForm>
        <SectionContacts title="Contacts">
          <Filter value={filter} onChange={this.filterForContacts} />
          <ContactList
            contacts={filteredContacts}
            numbers={numbers}
            onDeleteContact={this.deleteContact}
          />
        </SectionContacts>
      </>
    );
  }
}

export default App;
