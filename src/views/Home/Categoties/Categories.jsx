import { NavLink } from 'react-router-dom';
import categories from './categories.json';
import { ReactComponent as ArrowAll } from './arrow-all.svg';
import css from './categories.module.css';
const Categories = () => {
  return (
    <>
      <div className={css.categNav}>
        <h3 className={css.title}>Категории книг</h3>
        <ul className={css.categList}>
          {categories.map(({ id, name }) => (
            <li key={id} className={css.categ}>
              {name}
            </li>
          ))}
        </ul>

        <NavLink to="/books" className={css.all}>
          <span className={css.textAll}>Все категории</span>
          <ArrowAll className={css.arrowAll} />
        </NavLink>
      </div>
    </>
  );
};
export default Categories;
