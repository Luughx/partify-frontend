import axios from "axios"

const AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8080/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:8080/"
    }
})

export default AxiosInstance