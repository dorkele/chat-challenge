import messages from "../api/messages";
import { GET_MESSAGES, ADD_MESSAGE, ADD_USER, GET_USER } from "./types";

export function getChatMessages() {
    return messages
        .get("/")
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

export function addMessage(message, user, time) {
    const data = {
        message: message,
        author: user,
        timestamp: time,
    };

    const headers = {
        "Content-Type": "application/json",
    };

    return messages
        .post("/", data, { headers })
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
