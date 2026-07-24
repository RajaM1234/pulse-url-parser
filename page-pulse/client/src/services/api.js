import axios from "axios";

const api = axios.create({
    baseURL: "https://pulse-url-parser.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;