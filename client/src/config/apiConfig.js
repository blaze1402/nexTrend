import axios from "axios"

export const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`

const jwt = localStorage.getItem("jwt")

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
    }
})

export default api