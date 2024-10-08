import { User } from "./User";
import { BASE_URL, checkStatus, delay, parseJSON } from "../utility/fetchUtilities";

const url = `${BASE_URL}/Users`;

export const userAPI = {
  list(): Promise<User[]> {
    return fetch(url).then(checkStatus).then(delay(200)).then(parseJSON);
  },
  find(id: number): Promise<User> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },
  post(user: User) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },
  put(user: User) {
    return fetch(`${url}/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(user),
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
  findAccount(username: string, password: string): Promise<User> {
    return fetch(`${url}/${username}/${password}`).then(checkStatus).then(parseJSON);
  },
};
