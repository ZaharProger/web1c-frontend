import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import initialState from './initialState';
import changeState from './changeState.js';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ reducer: changeState }, initialState, applyMiddleware(sagaMiddleware));

//sagaMiddleware.run([updateProfileSaga]);

export default store;