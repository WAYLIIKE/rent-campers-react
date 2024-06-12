import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { Logo } from '../../components/Logo/Logo';
import css from './FavoritesPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CamperListItem } from '../../components/CamperLIstItem/CamperListItem';
import {
  selectCampers,
  selectFavorites,
  selectIsError,
  selectIsLoading,
} from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/camper/camperOps';
import { Skeleton } from '@mui/material';

export default function FavoritesPage() {
  const savedCampers = useSelector(selectFavorites);
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (campers.length === 0) dispatch(fetchCampers());
  }, [dispatch, campers]);

  const skeletonCount = 4;
  const skeletons = Array.from({ length: skeletonCount });

  return (
    <div>
      <Helmet>
        <title>Favorites - Campervaneo</title>
      </Helmet>
      <Container>
        <Logo favorites={true} />
        <div className={css.container}>
          <h1 className={css.title}>Favorite campervans</h1>
          <div className={css.line}></div>
          {loading || error ? (
            skeletons.map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={888}
                height={360}
                animation="wave"
                sx={{
                  borderRadius: '20px',
                  margin: '0 auto',
                  marginBottom: '32px',
                }}
              />
            ))
          ) : (
            <ul className={css.list}>
              {savedCampers.map((camper) => (
                <CamperListItem key={camper._id} camper={camper} />
              ))}
            </ul>
          )}
          {savedCampers.length === 0 ? (
            <p className={css.empty}>Your favorite campervans list is empty</p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
