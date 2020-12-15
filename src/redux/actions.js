import axios from "axios";
import { GET_LAST_TEN_MESSAGES } from "./types";

export function getChatMessages() {
    return axios({
        method: "get",
        url:
            "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?since=1521096352339&limit=10&token=vmg7caZZVF24",
    })
        .then(({ data }) => {
            console.log(data);
            return {
                type: GET_LAST_TEN_MESSAGES,
                messages: data,
            };
        })
        .catch((error) => {
            console.log(error);
        });
}

// useEffect(() => {
//     if (newMessage) {
//         axios({
//             method: "post",
//             url:
//                 "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0",
//             headers: {
//                 "Content-Type": "application/json",
//                 token: "vmg7caZZVF24",
//             },
//             data: { message: newMessage, author: "dora" },
//         })
//             .then((response) => {
//                 setMessages([...messages, newMessage]);
//                 console.log(response.data);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }
// }, [newMessage, messages]);
