import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components/Logo/Logo';
import { Container } from '../../components/Container/Container';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home - Campervaneo</title>
      </Helmet>
      <Container>
        <Logo />
      </Container>
    </div>
  );
}
