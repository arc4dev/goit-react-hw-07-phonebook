import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { getContacts, getFilterValue } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().startsWith(filter.toLowerCase())
  );
};

export const ContactList = ({ handleClick }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contact => (
          <ContactItem
            key={contact.name}
            contact={contact}
            handleClick={handleClick}
          />
        ))
      ) : (
        <p>Nie posiadasz zadnych kontaktow!</p>
      )}
    </ul>
  );
};
