import axios from "axios";
import env from "react-dotenv";

const instance = axios.create({
  baseURL: env.BACKEND_URL || "http://localhost:3500",
});

export default instance;