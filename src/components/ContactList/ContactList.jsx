import ContactItem from './ContactItem';
import s from './contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts, fetchContacts } from '../../redux/operations';
import { getContactsFilter, getContactsList } from '../../redux/selectors';

import { useEffect } from 'react';

export default function ContactList() {
  const filter = useSelector(getContactsFilter);
  const contacts = useSelector(getContactsList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ name, id, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => dispatch(deleteContacts(id))}
          />
        ))}
    </ul>
  );
}
