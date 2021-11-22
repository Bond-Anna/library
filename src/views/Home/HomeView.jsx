import { NavLink } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import Categories from './Categoties/Categories.jsx';
import { ReactComponent as ArrowNext } from './arrow-next.svg';
import css from './home.module.css';

const HomeView = () => {
  return (
    <div className={css.container}>
      <Categories />
      <div className={css.mainBlock}>
        <div className={css.new}>
          <h2 className={css.newTitle}>Новинки книг</h2>
          <NavLink to="/new" className={css.newLink}>
            Смотреть все <FiChevronRight size="24px" />
          </NavLink>
        </div>
        <ul className={css.booksList}>
          <li className={css.bookItem}>
            <img
              src="http://dummyimage.com/180x271/c0c0c0&text=No+image"
              alt=""
              width="180"
              height="271"
            />
            <p className={css.bookRating}>rating</p>
            <h3 className={css.bookName}>name</h3>
            <p className={css.bookAuthor}>author</p>
          </li>
          <li className={css.bookItem}>
            <img
              src="http://dummyimage.com/180x271/c0c0c0&text=No+image"
              alt=""
              width="180"
              height="271"
            />
            <p className={css.bookRating}>rating</p>
            <h3 className={css.bookName}>name</h3>
            <p className={css.bookAuthor}>author</p>
          </li>
          <li className={css.bookItem}>
            <img
              src="http://dummyimage.com/180x271/c0c0c0&text=No+image"
              alt=""
              width="180"
              height="271"
            />
            <p className={css.bookRating}>rating</p>
            <h3 className={css.bookName}>name</h3>
            <p className={css.bookAuthor}>author</p>
          </li>
          <li className={css.bookItem}>
            <img
              src="http://dummyimage.com/180x271/c0c0c0&text=No+image"
              alt=""
              width="180"
              height="271"
            />
            <p className={css.bookRating}>rating</p>
            <h3 className={css.bookName}>name</h3>
            <p className={css.bookAuthor}>author</p>
          </li>
          <li className={css.bookItem}>
            <img
              src="http://dummyimage.com/180x271/c0c0c0&text=No+image"
              alt=""
              width="180"
              height="271"
            />
            <p className={css.bookRating}>rating</p>
            <h3 className={css.bookName}>name</h3>
            <p className={css.bookAuthor}>author</p>
          </li>
        </ul>
        <ArrowNext className={css.arrowNext} />
      </div>
    </div>
  );
};
export default HomeView;
