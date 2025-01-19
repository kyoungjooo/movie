import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
});
export default AxiosInstance;
