import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = (state) => state.camper.items;
export const selectIsLoading = (state) => state.camper.loading;
export const selectIsError = (state) => state.camper.error;
export const selectLocation = (state) => state.camper.location;
export const selectFilters = (state) => state.camper.filters;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectLocation],
  (campers, inputFilter) => {
    return campers.filter((camper) =>
      camper.location.toLowerCase().includes(inputFilter.toLowerCase())
    );
  }
);

// export const selectFoundCampers = createSelector(
//   [selectFilteredCampers, selectFilters],
//   (campers, checkedFilters) => {
//     return campers.filter((camper) => camper.details >= 1 &&);
//   }
// );
