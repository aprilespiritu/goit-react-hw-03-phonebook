import React, { Component } from "react";
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class ContactListItem extends Component {
    static propTypes = {
        filteredContact: PropTypes.object.isRequired,
        deleteContact: PropTypes.func.isRequired,
    };

    handleDelete = () => {
        const { filteredContact, deleteContact } = this.props;
        deleteContact(filteredContact.id);
        Notify.success(`${filteredContact.name} was successfully deleted from your contacts!`, { position: 'center-top' });
    };

    render() {
        const { filteredContact } = this.props;

        return (
            <li className={css.contactListItem}>
                <p>{filteredContact.name}:</p>
                <p className={css.contactAlign}>{filteredContact.number}</p>
                <button className={css.btnDelete} onClick={this.handleDelete}>
                    Delete
                </button>
            </li>
        );
    }
}