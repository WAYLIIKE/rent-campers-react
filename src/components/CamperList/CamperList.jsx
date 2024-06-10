import { useSelector } from 'react-redux';
import {
  selectFilteredCampers,
  selectIsError,
  selectIsLoading,
} from '../../redux/selectors';
import { CamperListItem } from '../CamperLIstItem/CamperListItem';
import css from './CamperList.module.css';
import { useState } from 'react';
import { Skeleton } from '@mui/material';

export const CamperList = () => {
  const campers = useSelector(selectFilteredCampers);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

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

  const skeletonCount = 4;
  const skeletons = Array.from({ length: skeletonCount });

  return loading || error ? (
    <div>
      {skeletons.map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          width={888}
          height={360}
          animation="wave"
          sx={{ borderRadius: '20px', marginBottom: '32px' }}
        />
      ))}
    </div>
  ) : (
    <div>
      <ul className={css.list}>
        {visibleCampers.map((camper) => (
          <CamperListItem camper={camper} key={camper._id} />
        ))}
      </ul>
      {isLoadMore && !loading && campers.length > 4 && (
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
