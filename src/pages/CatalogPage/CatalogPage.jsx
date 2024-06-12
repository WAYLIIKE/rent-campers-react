import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import css from './CatalogPage.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/camper/camperOps';
import { CamperList } from '../../components/CamperList/CamperList';
import { Logo } from '../../components/Logo/Logo';

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  });

  return (
    <div>
      <Helmet>
        <title>Catalog - Campervaneo</title>
      </Helmet>
      <Container>
        <Logo />
        <div className={css.container}>
          <SearchBar />
          <CamperList />
        </div>
      </Container>
    </div>
  );
}
