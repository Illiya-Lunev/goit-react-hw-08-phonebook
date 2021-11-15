import ContactItem from './ContactItem';
import s from './contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

export default function ContactList() {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ name, id, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => dispatch(deleteContact(id))}
          />
        ))}
    </ul>
  );
}
