import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Elijah Montefalco', number: '459-12-56' },
      { id: 'id-2', name: 'Klaire Ty', number: '443-89-12' },
      { id: 'id-3', name: 'Jaxon Riego', number: '665-17-79' },
      { id: 'id-4', name: 'Amber Sevilla', number: '783-51-90' },
    ],
    filter: '',
  };

  componentDidMount() {
    //Check if contacts are stored in localStorage
    const savedContacts = localStorage.getItem('contacts');

    if (!savedContacts) {
      return;
    } else if (savedContacts.length > 0) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  } componentDidUpdate(prevProps, prevState) {
    //Check if current contacts are different 
    if (prevState.contacts !== this.state.contacts) {
      //Saves contacts to local storage, if contact is not the same
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;
    const duplicateContact = contacts.find(
      contact => contact.name === newContact.name
    );

    if (duplicateContact) {
      Notify.failure(`${newContact.name} is already in your contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  setFilter = filterValue => {
    this.setState({
      filter: filterValue,
    });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} contacts={contacts} />
        
        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={this.setFilter} />
        <ContactList
          filterContact={this.filterContact}
          deleteContact={this.deleteContact}
          contacts={contacts}
        />
      </div>
    );
  }
}

