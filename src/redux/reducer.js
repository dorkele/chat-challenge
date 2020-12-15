import { GET_LAST_TEN_MESSAGES } from "./types";
export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_LAST_TEN_MESSAGES:
            console.log(action);
            return { ...state, messages: action.messages };
        default:
            return state;
    }
}
