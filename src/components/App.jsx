import React, { Component } from 'react';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Elijah Montefalco', number: '459-12-56' },
      { id: 'id-2', name: 'Klaire Ty', number: '443-89-12' },
      { id: 'id-3', name: 'Jaxon Riego', number: '665-17-79' },
      { id: 'id-1', name: 'Amber Sevilla', number: '783-51-90' },
    ],
    filter: '',
  };

  componentDidMount() {
    //Check if contacts are stored in localStorage
    const savedContacts = localStorage.getItem('contacts');

    if (!savedContacts) {
      return;
    } else if (savedContacts.lenght > 0) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }componentDidUpdate()


}

