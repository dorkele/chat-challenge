import React, { useState } from "react";
import styles from "./MessageInput.module.css";
import Button from "../Button/Button";
import { addMessage } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function MessageInput({ user }) {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const keyCheck = (e) => {
        if (e.key === "Enter") {
            handleClick();
        }
    };

    const time = Date.now();

    //add message into state after a click or enter key press
    const handleClick = () => {
        inputValue && dispatch(addMessage(inputValue, user, time));
        setInputValue("");
    };

    return (
        <div className={styles.fixed_container}>
            <div className={styles.input_container}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Message"
                    onChange={handleInput}
                    value={inputValue}
                    onKeyPress={(e) => {
                        keyCheck(e);
                    }}
                />
                <Button buttonText="Send" onClick={handleClick} />
            </div>
        </div>
    );
}
