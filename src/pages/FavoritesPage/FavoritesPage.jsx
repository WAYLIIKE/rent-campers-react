import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { Logo } from '../../components/Logo/Logo';
import css from './FavoritesPage.module.css';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchCamperByID } from '../../redux/camper/camperOps';

export default function FavoritesPage() {
  // const [savedCampers, setSavedCampers] = useState([]);

  // useEffect(() => {
  //   setSavedCampers(JSON.parse(localStorage.getItem('campers')) || []);
  //   if (savedCampers)
  //     savedCampers.forEach((camper) => dispatch(fetchCamperByID(camper)));
  // }, [setSavedCampers, savedCampers, dispatch]);

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
        </div>
      </Container>
    </div>
  );
}
