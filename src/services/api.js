import axios from "axios";

const API = axios.create({
  baseURL: "https://crisislens-backend.onrender.com/api",
});

export default API;