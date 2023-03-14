import axios from "axios";


export const client = axios.create({
  baseURL: " https://unread.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
