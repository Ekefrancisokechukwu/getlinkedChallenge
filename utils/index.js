import axios from "axios";

const baseUrl = "https://backend.getlinked.ai";

export const customFetch = axios.create({
  baseURL: baseUrl,
});
