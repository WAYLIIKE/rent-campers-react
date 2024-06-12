import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = (state) => state.camper.items;
export const selectIsLoading = (state) => state.camper.loading;
export const selectIsError = (state) => state.camper.error;
export const selectLocation = (state) => state.camper.location;
export const selectFilters = (state) => state.camper.filters;
export const selectFavorites = (state) => state.camper.favorites;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectLocation],
  (campers, inputFilter) => {
    return campers.filter((camper) =>
      camper.location.toLowerCase().includes(inputFilter.toLowerCase())
    );
  }
);

// export const selectFoundCampers = createSelector(
//   [selectCampers, selectFilters],
//   (campers, filters) => {
//     const { type = [], equipment = [] } = filters; // Встановлення значень за замовчуванням

//     return campers.filter((camper) => {
//       // Перевірка типу кемпера
//       const typeMatch = type.length === 0 || type.includes(camper.type);

//       // Перевірка обладнання кемпера
//       const equipmentMatch =
//         equipment.length === 0 ||
//         equipment.every(
//           (item) => camper.equipment && camper.equipment.includes(item)
//         );

//       return typeMatch && equipmentMatch;
//     });
//   }
// );
