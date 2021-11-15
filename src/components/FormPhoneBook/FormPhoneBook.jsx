import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './formPhone.module.css';
import { addContact } from '../../redux/actions';

// Пропсы передаем в функцию как параметры
export default function FormPhoneBook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const items = useSelector(state => state.contacts.items);

  const onSubmit = () => dispatch(addContact({ name, number }));

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    // Делаем свич
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isContactExist = name => {
      return items.some(item => item.name.toLowerCase() === name.toLowerCase());
    };
    isContactExist(name)
      ? alert(`${name} is already in contacts.`)
      : onSubmit(name, number);
    // очистка вместо ресета
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и
                пробелов. Например Adrian, Jacob Mercer, Charles de Batz de
                Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={s.btn} type="submit">
        Add to contacts
      </button>
    </form>
  );
}
