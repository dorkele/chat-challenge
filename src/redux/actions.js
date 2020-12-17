import axios from "axios";
import { GET_MESSAGES, ADD_MESSAGE, ADD_USER, GET_USER } from "./types";

const api = "http://localhost:3001/messages";

export function getChatMessages() {
    return axios
        .get(api)
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
        timestamp: Date.now(),
    };

    const headers = {
        "Content-Type": "application/json",
    };

    return axios
        .post(api, data, { headers: headers })
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
