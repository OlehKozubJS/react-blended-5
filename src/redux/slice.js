import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: { basename: '' },
  reducers: {
    setBaseCurrency(state, action) {
      state.basename = action.payload;
    },
  },
  extraReducers: {
    [fetchBaseCurrency.fulfilled](state, action) {
      state.basename = action.payload;
    },
  },
});
export const currencyReducer = currencySlice.reducer;
export const { setBaseCurrency } = currencySlice.actions;
