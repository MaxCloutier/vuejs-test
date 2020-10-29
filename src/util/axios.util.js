import axios from "axios";

const instance = axios.create({
  baseURL: "https://tracktik-challenge.staffr.com/",
});

export default instance;
