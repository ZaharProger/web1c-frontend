import { configureStore } from '@reduxjs/toolkit';

import initialState from './initialState';
import changeState from './changeState.js';

const store = configureStore({ reducer: changeState }, initialState);

export default store;