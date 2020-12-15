import React, { useState } from "react";
import styles from "./Input.module.css";
import Button from "../Button/Button";

export default function Input() {
    const [inputValue, setInputValue] = useState("");
    console.log(inputValue);

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className={styles.msg_container}>
            <input type="text" placeholder="message" onChange={handleInput} />
            <Button buttonText="Send" />
        </div>
    );
}
