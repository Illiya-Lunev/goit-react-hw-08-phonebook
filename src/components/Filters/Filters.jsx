import { useSelector, useDispatch } from 'react-redux';
import s from './filters.module.css';
import { changeFilter } from '../../redux/actions';

export default function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={s.label}> Find contacts by name:</label>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </>
  );
}
