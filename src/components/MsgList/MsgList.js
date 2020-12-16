import React, { useEffect, useRef } from "react";
import styles from "./MsgList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getChatMessages } from "../../redux/actions";

export default function MsgList() {
    const dispatch = useDispatch();
    const elemRef = useRef();
    const chatMessages = useSelector((state) => state && state.messages);

    useEffect(() => {
        dispatch(getChatMessages());
    }, [dispatch]);

    useEffect(() => {
        const timer = setInterval(function () {
            dispatch(getChatMessages());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [dispatch]);

    useEffect(() => {
        if (chatMessages) {
            elemRef.current.scrollTop =
                elemRef.current.scrollHeight - elemRef.current.clientHeight;
        }
    }, [chatMessages]);

    return (
        <div ref={elemRef} className={styles.container}>
            <div className={styles.comments_container}>
                {chatMessages &&
                    chatMessages.map((message) => {
                        return (
                            <div
                                key={message.id}
                                className={styles.comment_container}
                            >
                                <div className={styles.info}>
                                    {message.author}
                                </div>
                                <div className={styles.message}>
                                    {message.message}
                                </div>
                                <div className={styles.info}>
                                    {new Date(
                                        message.timestamp
                                    ).toLocaleString()}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
