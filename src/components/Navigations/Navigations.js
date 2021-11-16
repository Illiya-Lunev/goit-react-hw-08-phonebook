import { NavLink } from 'react-router-dom';
import s from './navigations.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink className={s.link} activeClassName={s.activeLink} exact to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={s.link}
          activeClassName={s.activeLink}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
