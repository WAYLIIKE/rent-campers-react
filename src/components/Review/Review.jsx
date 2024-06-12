import { Icon } from '../Icon/Icon';
import css from './Review.module.css';

export const Review = ({ review }) => {
  return (
    <li>
      <div className={css.nameWrapper}>
        <p>{review.reviewer_name[0]}</p>
        <div>
          <p>{review.reviewer_name}</p>
          <Icon
            id={'icon-star'}
            width={16}
            height={16}
            fill="#F2F4F7"
            stroke="currentColor"
          />
        </div>
      </div>
    </li>
  );
};
