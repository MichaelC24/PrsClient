import { Request } from "./Requests";
import { BASE_URL, checkStatus, delay, parseJSON } from "../utility/fetchUtilities";

const url = `${BASE_URL}/Requests`;

export const requestAPI = {
  list(): Promise<Request[]> {
    return fetch(url).then(checkStatus).then(delay(200)).then(parseJSON);
  },
  find(id: number): Promise<Request> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },
  post(request: Request) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },
  put(request: Request) {
    return fetch(`${url}/${request.id}`, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },
  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },
};
