import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { filterContacts } from 'redux/slices/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch(filterContacts(e.target.value.trim()));

  return (
    <div className={css.filter}>
      <label htmlFor="name">Find contacts by name</label>
      <input onChange={handleChange} type="text" name="name" />
    </div>
  );
};
