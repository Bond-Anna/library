import { FiSearch, FiBell } from 'react-icons/fi';
import Navigation from '../Navigation/Navigation';
// import User from './user.svg';
import css from './header.module.css';

const Header = () => {
  return (
    <div className={css.main}>
      <div className={css.container}>
        <header className={css.header}>
          <a href="/" className={css.logo}>
            <span className={css.logoAccent}>Fox</span>
            <span>Books</span>
          </a>
          <div className={css.input}>
            <input
              type="text"
              placeholder="Искать книги, авторов, жанры, издательства"
              className={css.inputCastom}
            />
            <FiSearch className={css.iconSearch} />
          </div>
          <div className={css.menu}>
            <FiBell className={css.iconBell} />
            <div className={css.userMenu}>
              {/* <img src={User} alt="" className={css.iconUser} /> */}
              <svg
                className={css.iconUser}
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="#0E263E"
                  stroke-width="2"
                />
                <path
                  d="M18.544 20.364v-1.636a3.273 3.273 0 0 0-3.273-3.273H8.726a3.273 3.273 0 0 0-3.273 3.273v1.636M12.001 12.182a3.273 3.273 0 1 0 0-6.545 3.273 3.273 0 0 0 0 6.545Z"
                  stroke="#0E263E"
                  stroke-width="1.636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Войти
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </div>
  );
};
export default Header;
