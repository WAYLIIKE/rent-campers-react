import { useId } from 'react';
import css from './LocationInput.module.css';
import { Icon } from '../Icon/Icon';

export const LocationInput = () => {
  const inputId = useId();
  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={inputId}>
        Location
      </label>
      <div className={css.inputWrapper}>
        <input
          className={css.input}
          type="text"
          id={inputId}
          placeholder="Country, City"
        />
        <Icon
          id={'icon-location'}
          width={18}
          height={20}
          fill="none"
          stroke="currentColor"
          isInputStyled={true}
        />
      </div>
    </div>
  );
};
