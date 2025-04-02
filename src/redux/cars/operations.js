import { createAsyncThunk } from '@reduxjs/toolkit';
import { carRentalApi } from '../../utils/api';

export const fetchCars = createAsyncThunk('cars/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await carRentalApi.get('/cars');
    return response.data.cars;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
