import React, { useState } from "react";
import styles from "./Input.module.css";
import Button from "../Button/Button";
import addMessage from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Input() {
    const [inputValue, setInputValue] = useState("");
    console.log(inputValue);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleClick = () => {
        console.log("i was clicked");
        if (!inputValue) {
            return;
        } else {
            dispatch(addMessage(inputValue));
        }
    };

    return (
        <div className={styles.msg_container}>
            <input type="text" placeholder="message" onChange={handleInput} />
            <Button buttonText="Send" onClick={handleClick()} />
        </div>
    );
}
