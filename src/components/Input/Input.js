import React from "react";
import styles from "./Input.module.css";
import Button from "../Button/Button";

export default function Input() {
    return (
        <div className={styles.msg_container}>
            <input type="text" placeholder="message" />
            <Button buttonText="Send" />
        </div>
    );
}
