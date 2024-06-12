import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { Logo } from '../../components/Logo/Logo';
import css from './FavoritesPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CamperListItem } from '../../components/CamperLIstItem/CamperListItem';
import { selectCampers, selectFavorites } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/camper/camperOps';

export default function FavoritesPage() {
  const savedCampers = useSelector(selectFavorites);

  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);

  useEffect(() => {
    if (campers.length === 0) dispatch(fetchCampers());
  }, [dispatch, campers]);

  return (
    <div>
      <Helmet>
        <title>Favorites - Campervaneo</title>
      </Helmet>
      <Container>
        <Logo favorites={true} />
        <div className={css.container}>
          <h1 className={css.title}>Favorite campers</h1>
          <div className={css.line}></div>
          {savedCampers.map((camper) => (
            <CamperListItem key={camper._id} camper={camper} />
          ))}
        </div>
      </Container>
    </div>
  );
}
