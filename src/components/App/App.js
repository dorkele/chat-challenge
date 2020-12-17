import React, { useEffect } from "react";
import styles from "./App.module.css";
import MessageInput from "../MessageInput/MessageInput";
import MsgList from "../MsgList/MsgList";
import NicknameModal from "../NicknameModal/NicknameModal";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/actions";

export default function App() {
    const dispatch = useDispatch();

    //get user's nickname from state
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const nickname = useSelector((state) => state && state.user);

    return (
        <div className={styles.app_container}>
            {!nickname && <NicknameModal />}
            <MsgList />
            <MessageInput user={nickname} />
        </div>
    );
}
