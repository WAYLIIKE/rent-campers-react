import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://666224dc63e6a0189fecdb98.mockapi.io/api/campers',
});

export const fetchCampers = createAsyncThunk(
  'campers/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('/advert');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const fetchCamperByID = createAsyncThunk(
//   'campers/fetchByID',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axiosInstance.get(`/advert/${id}`);

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
