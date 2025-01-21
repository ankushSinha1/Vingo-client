import axios from "axios";

export const rootRoute = axios.create({
    baseURL: "https://vingo-backend.vercel.app"
    // baseURL: "http://localhost:8080"
})