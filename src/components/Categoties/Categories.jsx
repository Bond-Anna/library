import categories from './categories.json';
import { ReactComponent as ArrowAll } from './arrow-all.svg';
import css from './categories.module.css';
const Categories = () => {
  return (
    <>
      <div className={css.categNav}>
        <p className={css.title}>Категории книг</p>
        <ul className={css.categList}>
          {categories.map(({ id, name }) => (
            <li key={id} className={css.categ}>
              {name}
            </li>
          ))}
        </ul>
        <div className={css.all}>
          <span className={css.textAll}>Все категории</span>
          <ArrowAll className={css.arrowAll} />
        </div>
      </div>
    </>
  );
};
export default Categories;
