import { FETCH_ALL_PROFS, FETCH_PROFS_BY_SEARCH } from "../constants/actionTypes";

export default (state = { profs: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL_PROFS:
            return { 
                ...state, 
                profs: action.payload.data, 
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_PROFS_BY_SEARCH:
            return {
                ...state, 
                profs: action.payload.data,
            }
        default: 
            return state;
    };
};