import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './camperOps';

const camperSlice = createSlice({
  name: 'camper',
  initialState: {
    items: [],
    location: '',
    filters: { equipment: [], type: [] },
    loading: false,
    error: false,
  },
  reducers: {
    changeLocation: (state, action) => {
      state.location = action.payload;
    },
    changeFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const camperReducer = camperSlice.reducer;
export const { changeLocation, changeFilters } = camperSlice.actions;
