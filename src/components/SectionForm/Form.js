import React from 'react';

class Form extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = event => {
    this.setState({ name: event.currentTarget.value });
    // console.log(event.currentTarget.value);
  };

  addContacts() {
    this.setState(this.state.contacts.splice(0, 0, this.state.name));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.addContacts();
    this.props.onSubmit(this.state);
    // this.props.onSubmit(this.state.contacts.push(this.state.name));
    // console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default Form;
