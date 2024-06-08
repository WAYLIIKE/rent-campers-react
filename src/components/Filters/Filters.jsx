import { Icon } from '../Icon/Icon';
import css from './Filters.module.css';

export const Filters = () => {
  return (
    <div>
      <p className={css.title}>Filters</p>
      <h2 className={css.subtitle}>Vehicle equipment</h2>
      <div className={css.block}></div>
      <ul className={css.wrapper}>
        <li className={css.wrapperItem}>
          <button>
            <Icon
              id={'icon-wind'}
              width={32}
              height={32}
              fill="black"
              stroke="transparent"
            />
            <p className={css.content}>AC</p>
          </button>
        </li>
        <li className={css.wrapperItem}>
          <button>
            <Icon
              id={'icon-automatic'}
              width={32}
              height={32}
              fill="none"
              stroke="currentColor"
            />
            <p className={css.content}>Automatic</p>
          </button>
        </li>
        <li className={css.wrapperItem}>
          <button>
            <Icon
              id={'icon-eat'}
              width={32}
              height={32}
              fill="none"
              stroke="currentColor"
            />
            <p className={css.content}>Kitchen</p>
          </button>
        </li>
        <li className={css.wrapperItem}>
          <button>
            <Icon
              id={'icon-tv'}
              width={32}
              height={32}
              fill="none"
              stroke="currentColor"
            />
            <p className={css.content}>TV</p>
          </button>
        </li>
        <li className={css.wrapperItem}>
          <button>
            <Icon
              id={'icon-shower'}
              width={32}
              height={32}
              fill="none"
              stroke="currentColor"
            />
            <p className={css.content}>Shower/WC</p>
          </button>
        </li>
      </ul>
      <h2 className={css.subtitle}>Vehicle type</h2>
      <div className={css.block}></div>
      <ul className={css.wrapper}>
        <li className={css.wrapperItem}>
          <button>
            <Icon
              id={'icon-camper1'}
              width={40}
              height={28}
              fill="none"
              stroke="currentColor"
            />
            <p className={css.content}>Van</p>
          </button>
        </li>
        <li className={css.wrapperItem}>
          <button>
            <Icon
              id={'icon-camper2'}
              width={40}
              height={28}
              fill="none"
              stroke="currentColor"
            />
            <p className={css.content}>Fully Integrated</p>
          </button>
        </li>
        <li className={css.wrapperItem}>
          <button>
            <Icon
              id={'icon-camper3'}
              width={40}
              height={28}
              fill="none"
              stroke="currentColor"
            />
            <p className={css.content}>Alcove</p>
          </button>
        </li>
      </ul>
    </div>
  );
};
