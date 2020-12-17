import React from "react";
import styles from "./Button.module.css";

export default function Button({ buttonText, onClick }) {
    //check that a function is passed to Button component
    const handleClick = () => {
        if (typeof onClick === "function") {
            onClick();
        }
    };

    return (
        <button onClick={handleClick} className={styles.button}>
            {buttonText}
        </button>
    );
}
