import { combineReducers, createStore } from 'redux';

import todoReducer from './todo/reducers';
import userReducer from './users/reducers';

const rootReducer = combineReducers({
    todoReducer,
    userReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(rootReducer);
    return store;
}