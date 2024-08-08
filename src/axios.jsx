import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  // baseURL: "http://localhost:3500",
});

export default instance;