import axios from 'axios';

import { GET_JAVASCRIPT_TRENDING_REPOS } from '../types';
import { JAVASCRIPT_TRENDING_URL } from '../constants';

export const getTrendingRepositories = (since = 'weekly') => async dispatch => {
    try {
        const { data : payload } = await axios.get(`${JAVASCRIPT_TRENDING_URL}&since=${since}`);

        dispatch({
            type: GET_JAVASCRIPT_TRENDING_REPOS,
            payload
        }); 
    } catch(e) {
        console.error(e.message);
    }
}