import axios from "axios";

export default axios.create({
  baseURL: "https://movie-reviews-production.up.railway.app/",
  headers: { "Content-Type": "application/json" },
});
