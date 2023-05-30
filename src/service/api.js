import axios from "axios";

export function setupAPIClient(ctx) {
  const api = axios.create({
    baseURL: "http://docker-3081.app.fslab.dev",
    headers: {
      Accept: "application/json"
    }
  });

  return api;

}