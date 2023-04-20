import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const { increment } = counterSlice.actions;

export default store;
