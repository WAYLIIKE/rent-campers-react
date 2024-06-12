import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components/Logo/Logo';
import { Container } from '../../components/Container/Container';

import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home - Campervaneo</title>
      </Helmet>
      <Container>
        <Logo />
        <div className={css.container}>
          <img
            src="/public/home.jpg"
            alt="Family camper"
            className={css.img}
            width={700}
            height={500}
          />
          <div className={css.textContent}>
            <p className={css.span}>Explore, discover and enjoy</p>
            <p className={css.title}>
              unforgettable experiences with our campervans all over the world.
              Our camper vans are modern and fully equipped allrounders that
              offer high living comfort in compact dimensions. Find your dream
              campervan
            </p>
            <NavLink to="/catalog" className={css.submit}>
              Find your dream campervan
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
