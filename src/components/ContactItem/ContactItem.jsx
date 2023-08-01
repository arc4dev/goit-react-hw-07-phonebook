import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from 'redux/slices/contactsSlice';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = e => dispatch(deleteContact(contact.id));

  return (
    <li className={css.contact_item}>
      <p>
        {contact.name} {contact.number}
      </p>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
