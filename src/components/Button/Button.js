import React from "react";
import styles from "./Button.module.css";

export default function Button({ buttonText }) {
    return <button className={styles.orange_button}>{buttonText}</button>;
}
