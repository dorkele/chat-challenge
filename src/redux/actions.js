import messages, { token } from "../api/messages";
import { GET_MESSAGES, ADD_MESSAGE, ADD_USER, GET_USER } from "./types";

export function getChatMessages() {
    return messages
        .get(`/?token=${token}`)
        .then(({ data }) => {
            return {
                type: GET_MESSAGES,
                messages: data,
            };
        })
        .catch((error) => {
            console.log(error);
        });
}

export function addMessage(message, user) {
    const data = {
        message: message,
        author: user,
    };

    const headers = {
        "Content-Type": "application/json",
        token: token,
    };

    return messages
        .post("/", data, { headers: headers })
        .then(({ data }) => {
            return {
                type: ADD_MESSAGE,
                newMessage: data,
            };
        })
        .catch((error) => {
            console.log(error);
        });
}

export function addUser(user) {
    return {
        type: ADD_USER,
        user: user,
    };
}

export function getUser() {
    return {
        type: GET_USER,
    };
}
