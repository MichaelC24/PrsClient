import { Vendor } from "./Vendor";
import { BASE_URL, checkStatus, delay, parseJSON } from "../utility/fetchUtilities";

const url = `${BASE_URL}/Vendors`;

export const vendorAPI = {
  list(): Promise<Vendor[]> {
    return fetch(url).then(checkStatus).then(delay(200)).then(parseJSON);
  },
  find(id: number): Promise<Vendor> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },
  post(vendor: Vendor) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(vendor),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },
  put(vendor: Vendor) {
    return fetch(`${url}/${vendor.id}`, {
      method: "PUT",
      body: JSON.stringify(vendor),
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
