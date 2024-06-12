import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components/Logo/Logo';
import { Container } from '../../components/Container/Container';

import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../../redux/selectors';
import { changeLocation } from '../../redux/camper/camperSlice';

export default function HomePage() {
  const location = useSelector(selectLocation);
  const dispatch = useDispatch();

  if (location != '') dispatch(changeLocation(''));

  return (
    <div>
      <Helmet>
        <title>Home - Campervaneo</title>
      </Helmet>
      <Container>
        <Logo />
        <div className={css.container}>
          <img
            src="./home.jpg"
            alt="Family camper"
            className={css.img}
            width={700}
            height={500}
          />
          <div className={css.textContent}>
            <p className={css.span}>Explore, discover and enjoy</p>
            <p className={css.title}>
              unforgettable experiences with our campervans all over the world.
              Our campervans are modern and fully equipped allrounders that
              offer high living comfort in compact dimensions. Find your dream
              campervan!
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
