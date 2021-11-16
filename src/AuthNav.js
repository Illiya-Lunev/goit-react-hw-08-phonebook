import { NavLink } from 'react-router-dom';
import s from './components/Navigations/navigations.module.css';

export default function AuthNav() {
  return (
    <nav>
      <NavLink className={s.link} activeClassName={s.activeLink} to="/register">
        Registration
      </NavLink>
      <NavLink className={s.link} activeClassName={s.activeLink} to="/login">
        Log In
      </NavLink>
    </nav>
  );
}
