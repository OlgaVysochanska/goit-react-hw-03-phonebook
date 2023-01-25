import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount () {
    const contacts = JSON.parse( localStorage.getItem( "contacts" ) );
    if ( contacts?.length ) {
      this.setState( { contacts } );
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const { contacts } = this.state;
    if ( prevState.contacts.length !== contacts.length ) {
      localStorage.setItem( "contacts", JSON.stringify( contacts ) );
    }
  }

  onHandleSubmit = data => {
    const name = data.name;
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const number = data.number;
    const id = nanoid();
    const contact = { id, name, number };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleting = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onHandleSubmit={this.onHandleSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.onChangeFilter} />
        <ContactList contacts={visibleContacts} deleting={this.onDeleting} />
      </>
    );
  }
}
