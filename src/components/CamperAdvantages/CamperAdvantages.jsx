import { Icon } from '../Icon/Icon';
import css from './CamperAdvantages.module.css';

export const CamperAdvantages = ({
  camper: {
    adults,
    children,
    transmission,
    engine,
    details: { kitchen, beds, airConditioner },
  },
}) => {
  return (
    <ul className={css.container}>
      {adults && (
        <li className={css.wrapper}>
          <Icon
            id={'icon-users'}
            width={20}
            height={20}
            fill="var(--color-dark)"
            stroke="none"
          />
          <p className={css.text}>{adults} adults</p>
        </li>
      )}
      {transmission && (
        <li className={css.wrapper}>
          <Icon
            id={'icon-automatic'}
            width={20}
            height={20}
            fill="none"
            stroke="currentColor"
          />
          <p className={css.text}>
            {transmission === 'automatic' ? 'Automatic' : transmission}
          </p>
        </li>
      )}
      {engine && (
        <li className={css.wrapper}>
          <Icon
            id={'icon-automatic'}
            width={20}
            height={20}
            fill="none"
            stroke="currentColor"
          />
          <p className={css.text}>
            {engine === 'petrol' ? 'Petrol' : transmission}
          </p>
        </li>
      )}
      {kitchen && (
        <li className={css.wrapper}>
          <Icon
            id={'icon-eat'}
            width={20}
            height={20}
            fill="none"
            stroke="currentColor"
          />
          <p className={css.text}>Kitchen</p>
        </li>
      )}
      {beds && (
        <li className={css.wrapper}>
          <Icon
            id={'icon-bed'}
            width={20}
            height={20}
            fill="none"
            stroke="currentColor"
          />
          <p className={css.text}>
            {beds} {beds > 1 ? 'beds' : 'bed'}
          </p>
        </li>
      )}
      {airConditioner && (
        <li className={css.wrapper}>
          <Icon
            id={'icon-wind'}
            width={20}
            height={20}
            fill="var(--color-dark)"
            stroke="none"
          />
          <p className={css.text}>AC</p>
        </li>
      )}
    </ul>
  );
};
