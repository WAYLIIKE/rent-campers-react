import { Icon } from '../Icon/Icon';
import css from './CamperListItem.module.css';

export const CamperListItem = ({ camper }) => {
  return (
    <li className={css.container}>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={camper.gallery[0]}
          alt={camper.name}
          width={290}
          height={310}
        />
      </div>
      <div className={css.contentWrapper}>
        <div className={css.mainContent}>
          <p className={css.priceContent}>{camper.name}</p>
          <div className={css.priceWrapper}>
            <p className={css.priceContent}>€{camper.price}.00</p>
            <button className={css.favorite}>
              <Icon
                id={'icon-favorite'}
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
              />
            </button>
          </div>
        </div>
        <div>
          <Icon
            id={'icon-star'}
            width={16}
            height={16}
            fill="none"
            stroke="currentColor"
          />
          <p>{camper.rating}()</p>
        </div>
      </div>
    </li>
  );
};
