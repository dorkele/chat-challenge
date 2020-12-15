import React from "react";
import styles from "./App.module.css";
import Input from "../Input/Input";
import MsgList from "../MsgList/MsgList";

export default function App() {
    return (
        <div>
            <MsgList />
            <Input />
        </div>
    );
}
