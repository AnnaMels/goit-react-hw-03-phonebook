import PropTypes from "prop-types";
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm.styled';
import { AddContactButton } from './ContactForm.styled';
import { Input } from './ContactForm.styled';
import { Label } from './ContactForm.styled';

export default class Form extends Component {
    state = {
        name: '',
        number: ''
    };

    static propTypes = {
        name: PropTypes.string,
        number: PropTypes.number
    };


    handleNameInfo = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    
    onSubmit = (e) => {
        e.preventDefault();
        for (const el of this.props.contacts) {
            if (el.name === this.state.name) {
                alert(`${el.name} is already in contacts`);
                return;
            }
        }
        

        const newContact = {
            id: nanoid(),
            name: this.state.name,
            number:this.state.number
        };


        this.props.addContact(newContact);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };
    
    render() {
        return (
            <ContactForm onSubmit={this.onSubmit}>
                <Label>Name
                    <Input
                    onChange={this.handleNameInfo}
                    type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </Label>
                <Label>Number
                    <Input
                    onChange={this.handleNameInfo}
                    type="tel"
                    name="number"
                    value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                </Label>
            <AddContactButton>Add contact</AddContactButton>
      </ContactForm>
    )
    };
};