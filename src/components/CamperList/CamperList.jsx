import { useSelector } from 'react-redux';
import { selectCampers, selectIsLoading } from '../../redux/selectors';
import { CamperListItem } from '../CamperLIstItem/CamperListItem';
import css from './CamperList.module.css';
import { useState } from 'react';

export const CamperList = () => {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectIsLoading);

  const [isLoadMore, setIsLoadMore] = useState(true);
  const [maxItems, setMaxItems] = useState(4);

  const handleLoadMore = (count) => {
    if (campers.length - count < 4) {
      setIsLoadMore(false);
      return setMaxItems((prevValue) => prevValue + campers.length - count);
    }
    if (count < campers.length) setMaxItems((prevValue) => prevValue + 4);
  };

  const visibleCampers = campers.slice(0, maxItems);

  return (
    <div>
      <ul className={css.list}>
        {visibleCampers.map((camper) => (
          <CamperListItem camper={camper} key={camper._id} />
        ))}
      </ul>
      {isLoadMore && !loading && (
        <button
          className={css.button}
          onClick={() => {
            handleLoadMore(maxItems);
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
};
