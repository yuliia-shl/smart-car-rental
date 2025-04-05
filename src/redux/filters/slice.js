import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterBrand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeBrand: (state, action) => {
      state.filterBrand = action.payload;
    },
    changeRentalPrice: (state, action) => {
      state.rentalPrice = action.payload;
    },
    changeMinMileage: (state, action) => {
      state.minMileage = action.payload;
    },
    changeMaxMileage: (state, action) => {
      state.maxMileage = action.payload;
    },
    clearFilter: () => initialState,
  },
});

export const { changeBrand, changeRentalPrice, changeMinMileage, changeMaxMileage, clearFilter } =
  slice.actions;
export const filterReducer = slice.reducer;
