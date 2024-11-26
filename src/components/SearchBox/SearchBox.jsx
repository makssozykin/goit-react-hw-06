import css from './SearchBox.module.css';

export const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.searchbox}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};
