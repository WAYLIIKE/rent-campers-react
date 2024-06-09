import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/selectors';
import { CamperListItem } from '../CamperLIstItem/CamperListItem';
import css from './CamperList.module.css';

export const CamperList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul>
      {campers.map((camper) => (
        <CamperListItem camper={camper} key={camper._id}></CamperListItem>
      ))}
    </ul>
  );
};
