import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class ContactForm extends Component {
    stating propTypes = {
        addContact: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ),
    };

    state = {
        name: '',
        number: '',
    };

    handleNameChange = e => {
        this.setState({
            name: e.target.value,
        });
    };

    handleNumberChange = e => {
        this.setState({
            number: e.target.value,
        });
    };

    handleSubmit = e => {
        // Form won't refresh on Submit
        e.preventDefault();
        
        const { name, number } = this.state;
        const { addContact, contacts } = this.props;

        // if text fields are empty, form won't submit
        if (name.trim() === '' || number.trim() === '') {
            return;
        }

        // if contact already exist, form won't submit
        const existingContact = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        );
        
        if (existingContact) {
            Notify.failure(`${name} is already in your contacts!`, { position: 'center-top' });
            return;
        } else {
            Notify.success(`${name} is successfully added to your contacts!`, { position: 'center-top' });
        }

        // Add Contact
        addContact({
            id: nanoid(),
            name: name.trim(),
            number: number.trim(),
        });

        //Reset Form Fields on Submit
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form className={}
        )
    }

}