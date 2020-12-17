import React, { useEffect } from "react";
import styles from "./Message.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/actions";

export default function Message({ message }) {
    const dispatch = useDispatch();

    //get user nickname from state to compare it with message.author for dynamic styling
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const user = useSelector((state) => state && state.user);
    const author = message.author;

    return (
        <div
            className={
                author === user
                    ? styles.comment_container_this_user
                    : styles.comment_container_other_user
            }
        >
            {author === user ? null : (
                <div className={styles.info}>{author}</div>
            )}
            <div className={styles.message}>{message.message}</div>
            <div className={styles.info}>
                {new Date(message.timestamp).toLocaleString()}
            </div>
        </div>
    );
}
