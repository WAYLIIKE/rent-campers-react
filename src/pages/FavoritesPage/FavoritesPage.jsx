import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';

export default function FavoritesPage() {
  return (
    <div>
      <Helmet>
        <title>Favorites - Campervaneo</title>
      </Helmet>
      <Container>
        <p>Blue cheese</p>
      </Container>
    </div>
  );
}
