import * as api from '../api';
import { FETCH_CONVERSATIONS,FETCH_CONVERSATION  } from '../constants/actionTypes';

export const fetchConversations = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchConversations(id);
        dispatch({ type: FETCH_CONVERSATIONS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const fetchConversation = (senderId, receiverId) => async (dispatch) => {
    try {
        const { data } = await api.fetchConversation(senderId, receiverId);
        dispatch({ type: FETCH_CONVERSATION, payload: data });
    } catch (error) {
        console.log(error);
    }
};
