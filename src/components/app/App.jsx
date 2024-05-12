import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import initialContacts from '../contacts.json'
import css from './App.module.css'
import { useState, useEffect } from 'react'

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
  }
  return initialContacts;
};

export default function App() {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact => { 
    setContacts(previousContacts => {
      return [...previousContacts, newContact]
    })
  }

  const deleteContact = contactId => {
    setContacts(previousContacts => {
       return previousContacts.filter(contacts => contacts.id !== contactId)
    })
  }

  const filterContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(filter.toLowerCase()))
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])

  return (
    <div className={css.container}>
       <h1>Phonebook</h1>
       <ContactForm onAdd={addContact} />
       <SearchBox value={filter} onFilter={setFilter} />
       <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </div>
  )
}
