import { FETCH_CONVERSATIONS, FETCH_CONVERSATION } from "../constants/actionTypes";

export default (state = { conversations: [], conversation: [] }, action) => {
    switch (action.type) {
        case FETCH_CONVERSATIONS:
            return {
                ... state, 
                conversations: action.payload,
            };
        case FETCH_CONVERSATION:
            return {
                ...state, 
                conversation: action.payload,
            };
        default:
            return state;
    }
};