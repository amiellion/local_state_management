import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/slice';
import todoSliceReducer from './todo/slice';
import userSliceReducer from './user/slice';

const reducer = combineReducers({
    todo: todoSliceReducer,
    user: userSliceReducer,
    counter: counterReducer,
})

export const store = configureStore({
    reducer,
});