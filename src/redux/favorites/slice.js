import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const car = action.payload;
      const isFavorite = state.items.some(favorite => favorite.id === car.id);
      if (isFavorite) {
        state.items = state.items.filter(favorite => favorite.id !== car.id);
      } else {
        state.items.push(car);
      }
    },
  },
});
export const { toggleFavorite } = slice.actions;

export const favoritesReducer = slice.reducer;
