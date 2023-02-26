import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export default function Searchbar({isFindImg}) {
	const v = (e) => {
		console.log(e);
	}
  return (
    <header className={css.searchbar}>
      <form className={css.form} >
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
         //  autocomplete="off"
         //  autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
