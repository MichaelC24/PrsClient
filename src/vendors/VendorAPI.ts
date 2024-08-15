import { Vendor } from "./Vendors";
import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";

const url = `${BASE_URL}/movies`

export const vendorAPI = {
    list(): Promise<Vendor[]> {
        return fetch(url).then(checkStatus).then(parseJSON);
    }


}