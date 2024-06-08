import { Filters } from '../Filters/Filters';
import { LocationInput } from '../LocationInput/LocationInput';
import css from './SearchBar.module.css';

export const SearchBar = () => {
  return (
    <div className={css.container}>
      <LocationInput />
      <Filters />
    </div>
  );
};
