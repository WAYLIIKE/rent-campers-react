import { useEffect, useState } from 'react';
import { CamperAdvantages } from '../CamperAdvantages/CamperAdvantages';
import { Icon } from '../Icon/Icon';
import css from './CamperListItem.module.css';
import { BaseModal } from '../BaseModal/BaseModal';
import { CamperModal } from '../CamperModal/CamperModal';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';

export const CamperListItem = ({ camper }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // const savedCampers = useSelector(selectFavorites);

  useEffect(() => {
    const savedCampers = JSON.parse(localStorage.getItem('campers')) || [];
    setIsFavorite(savedCampers.includes(camper._id));
  }, [camper._id]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleFavoriteClick = () => {
    const savedCampers = JSON.parse(localStorage.getItem('campers')) || [];
    if (savedCampers.includes(camper._id)) {
      const updatedCampers = savedCampers.filter((id) => id !== camper._id);
      localStorage.setItem('campers', JSON.stringify(updatedCampers));
      return setIsFavorite(false);
    }

    savedCampers.push(camper._id);
    localStorage.setItem('campers', JSON.stringify(savedCampers));
    setIsFavorite(true);
  };

  // const handleFavoriteClick = () => {
  //   savedCampers.map((savedCamper) => {
  //     if (savedCamper.includes(camper._id)) {
  //       const updatedCampers = savedCampers.filter(
  //         (savedCamper) => savedCamper.id !== camper._id
  //       );
  //       localStorage.setItem('campers', JSON.stringify(updatedCampers));
  //       return setIsFavorite(false);
  //     }

  //     savedCampers.push(camper);
  //     localStorage.setItem('campers', JSON.stringify(savedCamper));
  //     setIsFavorite(true);
  //   });
  // };

  return (
    <li className={css.container}>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={camper.gallery[0]}
          alt={camper.name}
          width={290}
          height={310}
        />
      </div>
      <div className={css.contentWrapper}>
        <div className={css.mainContent}>
          <p className={css.priceContent}>{camper.name}</p>
          <div className={css.priceWrapper}>
            <p className={css.priceContent}>€{camper.price}.00</p>
            <button
              className={css.favorite}
              onClick={() => handleFavoriteClick()}
            >
              {isFavorite ? (
                <Icon
                  id={'icon-favorite'}
                  width={24}
                  height={24}
                  fill="var(--color-red)"
                  stroke="var(--color-red)"
                />
              ) : (
                <Icon
                  id={'icon-favorite'}
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                />
              )}
            </button>
          </div>
        </div>
        <div className={css.secondaryWrapper}>
          <div className={css.secondaryContent}>
            <Icon
              id={'icon-star'}
              width={16}
              height={16}
              fill="var(--color-yellow)"
              stroke="var(--color-yellow)"
            />
            <p className={css.rating}>
              {camper.rating}(
              {camper.reviews.length > 1
                ? `${camper.reviews.length} Reviews`
                : `${camper.reviews.length} Review`}
              )
            </p>
          </div>
          <div className={css.secondaryContent}>
            <Icon
              id={'icon-location'}
              width={16}
              height={16}
              fill="none"
              stroke="currentColor"
            />
            <p className={css.location}>{camper.location}</p>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <CamperAdvantages camper={camper} />
        <button
          className={css.button}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Show more
        </button>
      </div>
      <BaseModal isOpen={isModalOpen} onClose={toggleModal}>
        <CamperModal camper={camper} />
      </BaseModal>
    </li>
  );
};
