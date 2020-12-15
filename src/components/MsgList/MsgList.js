import React, { useEffect } from "react";
import styles from "./MsgList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getChatMessages } from "../../redux/actions";

export default function MsgList() {
    const dispatch = useDispatch();
    const chatMessages = useSelector(
        (state) => state.messages && state.messages
    );
    useEffect(() => {
        dispatch(getChatMessages());
    }, []);

    console.log("chatMsgs: ", chatMessages);
    return (
        <React.Fragment>
            {chatMessages &&
                chatMessages.map((message) => {
                    return (
                        <div
                            key={message._id}
                            className={styles.comment_container}
                        >
                            <div>{message.author}</div>
                            <div>{message.message}</div>
                            <div className="black-font name-date">
                                {new Date(message.timestamp).toLocaleString()}
                            </div>
                        </div>
                    );
                })}
        </React.Fragment>
    );
}
