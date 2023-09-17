import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: { basename: '' },
  reducers: {},
  extraReducers: {
    [fetchBaseCurrency.fulfilled](state, action) {
      state.basename = action.payload;
    },
  },
});
export const currencyReducer = currencySlice.reducer;
