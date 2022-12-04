import React from 'react';
import Form from './SectionForm/Form';
import SectionForm from './SectionForm/SectionForm';
import SectionContacts from './SectionContacts/SectionContacts';
import ContactList from './SectionContacts/ContactsList';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  formSubmitHandler = data => {
    // console.log(data);
    this.setState({
      contacts: data,
    });
    console.log(this.state);
    // return data;
  };
  render() {
    return (
      <>
        <SectionForm title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </SectionForm>
        <SectionContacts title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </SectionContacts>
      </>
    );
  }
}

export default App;
