import axios from "axios";

const api = axios.create({
  baseURL: "https://api-ngcash.herokuapp.com",
  timeout: 5000,
});

export default api;
