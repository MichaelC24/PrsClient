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
      
  },
  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },
  review(request: Request) {
    return fetch(`${url}/review/${request.id}`, {
      method: "PUT", 
      body: JSON.stringify(request),
      headers :{
        "Content-Type": "application/json"
      },
    })
    .then(checkStatus)
  },
  approve(request: Request) {
    return fetch(`${url}/approve/${request.id}`, {
      method: "PUT", 
      body: JSON.stringify(request),
      headers :{
        "Content-Type": "application/json"
      },
    })
    .then(checkStatus)
  },
  reject(request: Request) { 
    return fetch(`${url}/reject/${request.id}`, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type" :"application/json"
      },
    })
  }
};
