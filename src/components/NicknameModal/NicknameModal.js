import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./NicknameModal.module.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";

export default function NicknameModal() {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const keyCheck = (e) => {
        if (e.key === "Enter") {
            handleClick();
        }
    };

    //add user nickname into state after clicking on the button or pressing enter key
    const handleClick = () => {
        inputValue && dispatch(addUser(inputValue));
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <input
                    placeholder="Add a nickname"
                    onChange={(e) => handleChange(e)}
                    value={inputValue}
                    className={styles.input}
                    onKeyPress={keyCheck}
                />
                <Button
                    buttonText="Set"
                    className={styles.button}
                    onClick={handleClick}
                />
            </div>
        </div>
    );
}
