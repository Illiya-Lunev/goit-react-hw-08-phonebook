import FormPhoneBook from './components/FormPhoneBook/FormPhoneBook.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filters/Filters.jsx';
import s from './components/FormPhoneBook/formPhone.module.css';

export default function App() {
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <FormPhoneBook />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
