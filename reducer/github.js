import { combineReducers } from 'redux';
import { GET_JAVASCRIPT_TRENDING_REPOS } from '../types';

const repositories = (state = [], { type, payload }) => {
    switch(type) {
        case GET_JAVASCRIPT_TRENDING_REPOS:
            return payload;

        default:
            return state;
    }
}

export default combineReducers({
    repositories
});