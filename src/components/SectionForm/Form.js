import React from 'react';
import { nanoid } from 'nanoid';
class Form extends React.Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleInputChangeName = event => {
    this.setState({ id: nanoid() });
    this.setState({ name: event.currentTarget.value });
  };

  handleInputChangeNumber = event => {
    this.setState({ number: event.currentTarget.value });
  };
  // createUserContact = () => {
  //   // this.setState(
  //   //   this.state.contacts.splice(0, 0, {
  //   //     id: this.state.id,
  //   //     name: this.state.name,
  //   //   })
  //   // );
  //   this.setState({
  //     contacts: [
  //       ...this.state.contacts,
  //       { id: this.state.id, name: this.state.name },
  //     ],
  //   });
  //   // this.setState(this.state.contacts.push({ 2: 1 }));
  //   // this.addContactId();
  //   // this.setState(prevState => ({
  //   //   contacts: [this.state],
  //   // }));
  //   console.log(this.state);
  // };

  handleSubmit = event => {
    event.preventDefault();

    // this.createUserContact();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ contacts: [], name: '', id: '', number: '' });
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
            onChange={this.handleInputChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default Form;
