import axios from "axios";
import { GET_MESSAGES, ADD_MESSAGE } from "./types";

export function getChatMessages() {
    return axios
        .get("http://localhost:3001/messages")
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

export default function addMessage(message) {
    const data = {
        message: message,
        author: "dora",
        timestamp: Date.now(),
    };

    const headers = {
        "Content-Type": "application/json",
    };

    return axios
        .post("http://localhost:3001/messages", data, { headers: headers })
        .then((response) => {
            return {
                type: ADD_MESSAGE,
                newMessage: response.data,
            };
        })
        .catch(function (error) {
            console.log(error);
        });
}
