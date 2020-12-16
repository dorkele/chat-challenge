import React from "react";
import styles from "./Button.module.css";

export default function Button({ buttonText, onClick }) {
    return (
        <button onClick={onClick} className={styles.button}>
            {buttonText}
        </button>
    );
}
