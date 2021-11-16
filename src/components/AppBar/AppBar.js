import Navigation from '../Navigations/Navigations';
import s from './appBar.module.css';
import { useSelector } from 'react-redux';
import AuthNav from '../../AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import authSelectors from '../../redux/Auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
