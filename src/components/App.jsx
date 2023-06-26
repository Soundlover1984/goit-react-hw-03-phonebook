import React, { Component } from "react";
import { Container, MainHeader, SubHeader } from './App.styled';
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    };
    
    onAddBtnClick = FormData => {
        const { name, number } = FormData;

        const includesName = this.state.contacts.find(
            contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        );
    };

  render() {
    return (
      <Container>
        <MainHeader>Phonebook</MainHeader>
        <ContactForm onAddBtnClick={this.onAddBtnClick} />
        <SubHeader>Contacts</SubHeader>
      </Container>
    );
  }
};
