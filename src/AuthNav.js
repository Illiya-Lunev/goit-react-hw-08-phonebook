import { NavLink } from 'react-router-dom';
import s from './components/Navigations/navigations.module.css';

export default function AuthNav() {
  return (
    <nav>
      <NavLink className={s.link} to="/register">
        Registration
      </NavLink>
      <NavLink className={s.link} to="/login">
        Log In
      </NavLink>
    </nav>
  );
}
