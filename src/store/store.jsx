import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const initialState = {
  value: 0,
};

const controller = createSlice({
  name: 'controller',
  initialState: 0,
  reducers: {
    increment: () => {
      initialState.value += 1;
    },
  },
});

const rootReducer = combineReducers({
  controller: controller.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const { increment } = controller.actions;

export default store;
