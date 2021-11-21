import { NavLink } from 'react-router-dom';
import { BiGridAlt } from 'react-icons/bi';
import css from './menu.module.css';

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <BiGridAlt className={css.icon} />
      <NavLink
        to="/categories"
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : css.link}`
        }
      >
        Категории
      </NavLink>
      <NavLink
        to="/books"
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : css.link}`
        }
      >
        Книги
      </NavLink>
      <NavLink
        to="/audioBooks"
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : css.link}`
        }
      >
        Аудиокниги
      </NavLink>
      <NavLink
        to="/compilations"
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : css.link}`
        }
      >
        Подборки
      </NavLink>
      <NavLink
        to="/new"
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : css.link}`
        }
      >
        Новинки
      </NavLink>
      <NavLink
        to="/myBooks"
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : css.link}`
        }
      >
        Мои книги
      </NavLink>
    </nav>
  );
};
export default Navigation;
