import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";

import todoReducer from './todo/reducers';
import userReducer from './users/reducers';

const rootReducer = combineReducers({
    todoReducer,
    userReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger));
    return store;
}