import { createAsyncThunk } from '@reduxjs/toolkit';
import { carRentalApi } from '../../utils/api';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ filters = {}, page }, thunkAPI) => {
    try {
      const response = await carRentalApi.get('/cars', {
        params: {
          brand: filters.filterBrand || undefined,
          rentalPrice: filters.rentalPrice ? Number(filters.rentalPrice) : undefined,
          minMileage: filters.minMileage ? Number(filters.minMileage) : undefined,
          maxMileage: filters.maxMileage ? Number(filters.maxMileage) : undefined,
          page: page,
        },
      });

      return {
        cars: response.data.cars,
        totalPages: response.data.totalPages,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchBrands = createAsyncThunk('cars/fetchBrands', async (_, thunkAPI) => {
  try {
    const response = await carRentalApi.get('/brands');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchCarById = createAsyncThunk('cars/fetchCarById', async (id, thunkAPI) => {
  try {
    const response = await carRentalApi.get(`/cars/${id}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
