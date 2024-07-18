import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3500" || process.env.REACT_APP_BACKEND_URL,
});

export default instance;