import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands, fetchCarById, fetchCars } from './operations';

const initialState = {
  items: [],
  brands: [],
  carById: {},
  loading: false,
  error: null,
  page: 1,
  totalPages: 0,
};

const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    clearCars: state => {
      state.items = [];
      state.page = 1;
      state.error = null;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        if (state.page === 1) {
          state.items = action.payload.cars;
        } else {
          state.items = [...state.items, ...action.payload.cars];
        }

        state.totalPages = action.payload.totalPages;
        state.error = null;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBrands.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.carById = action.payload;
        state.error = null;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCars, setPage } = slice.actions;
export const carsReducer = slice.reducer;
