import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/Auth/auth-operations';
import s from './ViewsStyles/loginViews.module.css';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (email, password) => dispatch(logIn({ email, password }));

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.login_box}>
      <h1>Login</h1>

      <form
        onSubmit={handleSubmit}
        className={s.user_box_form}
        autoComplete="off"
      >
        <div className={s.user_box}>
          <input
            className={s.user_box_input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <label className={s.user_box_label}> Email</label>
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
          LogIn
        </button>
      </form>
    </div>
  );
}
