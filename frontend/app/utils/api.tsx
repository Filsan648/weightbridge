import axios from "axios";

export const api = axios.create({
    baseURL: "https://http://127.0.0.1:8000/",
});