import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors';
import { logOut } from '../../redux/Auth/auth-operations';
import s from './userMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={s.user_menu}>
      <p className={s.user_menu_title}>
        Welcome,<span className={s.user_menu_title_name}>{name}</span>
      </p>
      <button
        className={s.user_menu_btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Exit
      </button>
    </div>
  );
}
