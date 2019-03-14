import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import gitHub from './github'

export const middlewares = () => [thunk];

export const initializeStore = (initialState = {}) =>
    createStore(
        combineReducers({
            gitHub
        }),
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares()))
    );