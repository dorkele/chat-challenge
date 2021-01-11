import React, { useEffect, useRef } from "react";
import styles from "./MsgList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getChatMessages } from "../../redux/actions";
import Message from "../Message/Message";
//import { store } from "../../index";

export default function MsgList() {
    const dispatch = useDispatch();
    const elemRef = useRef();
    const chatMessages = useSelector((state) => state && state.messages);
    const msgInterval = 5000;

    //const previousChatMessages = usePrevious(chatMessages);

    //get chat messages from state after component mounts
    // useEffect(() => {
    //     dispatch(getChatMessages());
    // }, [dispatch]);

    // //check for new messages every 1s
    // useEffect(() => {
    //     const timer = setInterval(function () {
    //         dispatch(getChatMessages());
    //     }, msgInterval);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, [dispatch]);

    //scroll to the bottom of the container when component mounts and upon state change
    // useEffect(() => {
    //     if (
    //         chatMessages &&
    //         previousChatMessages &&
    //         chatMessages.length > previousChatMessages.length
    //     ) {
    //         elemRef.current.scrollTop =
    //             elemRef.current.scrollHeight - elemRef.current.clientHeight;
    //     }
    // }, [chatMessages, previousChatMessages]);

    return (
        <div ref={elemRef} className={styles.container}>
            <div className={styles.comments_container}>
                {chatMessages &&
                    chatMessages.map((message) => {
                        return <Message message={message} key={message.id} />;
                    })}
            </div>
        </div>
    );
}

// function usePrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//         ref.current = value;
//     }, [value]);
//     return ref.current;
// }
