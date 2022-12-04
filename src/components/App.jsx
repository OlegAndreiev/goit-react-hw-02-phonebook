import React from 'react';
import Form from './SectionForm/Form';
import SectionForm from './SectionForm/SectionForm';
import SectionContacts from './SectionContacts/SectionContacts';
import ContactList from './SectionContacts/ContactsList';
// import FeedbackWidget from './FeedbackWidget';

class App extends React.Component {
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <SectionForm title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </SectionForm>
        <SectionContacts title="Contacts">
          {/* <ContactList contacts={this.data} /> */}
        </SectionContacts>
      </>
    );
  }
}

export default App;
