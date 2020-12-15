import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MsgList() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url:
                "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?since=1521096352339&limit=10&token=vmg7caZZVF24",
        })
            .then(({ data }) => {
                console.log(data);
                setMessages(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {messages &&
                messages.map((message) => {
                    return (
                        <div key={message._id}>
                            <div>{message.author}</div>
                            <div>{message.message}</div>
                            <div className="black-font name-date">
                                {new Date(message.timestamp).toLocaleString()}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
