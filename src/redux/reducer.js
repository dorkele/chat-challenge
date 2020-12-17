import { GET_MESSAGES, ADD_MESSAGE, ADD_USER, GET_USER } from "./types";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_MESSAGES:
            return { ...state, messages: action.messages };
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.newMessage],
            };
        case ADD_USER:
            return {
                ...state,
                user: action.user,
            };
        case GET_USER:
            return {
                ...state,
            };
        default:
            return state;
    }
}
