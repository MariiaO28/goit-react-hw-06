import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function getFilteredContacts(contacts, filter) {
    return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
  )}

export default function ContactList() { 

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const filteredContacts = getFilteredContacts(contacts, filter);

    return (
        <ul className={css.list}>
            {filteredContacts.map((contact) => (
                <li className={css.card} key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            ))}
        </ul>
    )
}