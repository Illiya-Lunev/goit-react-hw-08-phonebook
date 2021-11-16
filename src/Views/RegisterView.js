import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/Auth/auth-operations';
import s from './ViewsStyles/loginViews.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (name, email, password) =>
    dispatch(register({ name, email, password }));

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, email, password);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.login_box}>
      <h1>Registration page</h1>

      <form
        className={s.user_box_form}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className={s.user_box}>
          <input
            className={s.user_box_input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          <label className={s.user_box_label}>Name</label>
        </div>
        <div className={s.user_box}>
          <input
            className={s.user_box_input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <label className={s.user_box_label}>Email</label>
        </div>
        <div className={s.user_box}>
          <input
            className={s.user_box_input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <label className={s.user_box_label}>Password </label>
        </div>
        <button className={s.user_box_btn} type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SignUp
        </button>
      </form>
    </div>
  );
}
