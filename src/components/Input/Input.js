import React, { useState, useRef } from "react";
import styles from "./Input.module.css";
import Button from "../Button/Button";
import addMessage from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Input() {
    const elemRef = useRef();
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

    const handleClick = () => {
        inputValue && dispatch(addMessage(inputValue));
        elemRef.current.value = "";
    };

    return (
        <div className={styles.fixed_container}>
            <div className={styles.input_container}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="message"
                    onChange={handleInput}
                    ref={elemRef}
                    onKeyPress={(e) => {
                        keyCheck(e);
                    }}
                />
                <Button buttonText="Send" onClick={handleClick} />
            </div>
        </div>
    );
}
