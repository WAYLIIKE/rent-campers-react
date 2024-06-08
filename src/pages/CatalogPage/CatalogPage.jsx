import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <div>
      <Helmet>
        <title>Catalog - Campervaneo</title>
      </Helmet>
      <Container>
        <div className={css.container}>
          <SearchBar />
        </div>
      </Container>
    </div>
  );
}
