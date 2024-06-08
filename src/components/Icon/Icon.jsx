import css from './Icon.module.css';

export const Icon = ({
  id,
  width = 24,
  height = 24,
  fill,
  stroke,
  isInputStyled,
}) => {
  return (
    <svg
      className={isInputStyled ? css.icon : null}
      width={width}
      height={height}
      role="img"
      fill={fill}
      stroke={stroke}
    >
      <use xlinkHref={`../../../public/sprite.svg#${id}`} />
    </svg>
  );
};
