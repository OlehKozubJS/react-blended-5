import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserInfo } from 'service/opencagedataApi';

export const fetchBaseCurrency = createAsyncThunk(
  'fetch/BaseCurrency',
  async (crd, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedBasename = state.basename;

    if (persistedBasename) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Already have basecurrency');
    }

    try {
      const data = await getUserInfo(crd);
      return data.results[0].annotations.currency.iso_code;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
