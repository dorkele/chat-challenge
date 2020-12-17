import axios from "axios";

export default axios.create({
    baseURL: "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0",
});

export const token = "oOaFjBdbucUw";
