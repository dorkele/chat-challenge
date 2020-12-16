import { GET_MESSAGES, ADD_MESSAGE } from "./types";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_MESSAGES:
            return { ...state, messages: action.messages };
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.newMessage],
            };
        default:
            return state;
    }
}
