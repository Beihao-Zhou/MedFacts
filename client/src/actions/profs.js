import * as api from '../api';
import { FETCH_ALL_PROFS, FETCH_PROFS_BY_SEARCH } from '../constants/actionTypes';

export const getProfs = (page) => async (dispatch) => {
    try {
        const { data: { data, currentPage, numberOfPages } } = await api.fetchProfs(page);

        dispatch({ type: FETCH_ALL_PROFS, payload: { data, currentPage, numberOfPages } });
    } catch (error) {
        console.log(error);
    }
};

export const getProfsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchProfsBySearch(searchQuery);
        console.log(data);
        dispatch({ type: FETCH_PROFS_BY_SEARCH, payload: { data } });
    } catch (error) {
        console.log(error);
    }
};