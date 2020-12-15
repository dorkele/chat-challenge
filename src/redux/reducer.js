import { GET_LAST_TEN_MESSAGES, ADD_MESSAGE } from "./types";
export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_LAST_TEN_MESSAGES:
            console.log(action);
            return { ...state, messages: action.messages };
        case ADD_MESSAGE:
            console.log("state: ", state);
            return {
                ...state,
                messages: state.messages.concat(action.newMessage),
            };
        default:
            return state;
    }
}
