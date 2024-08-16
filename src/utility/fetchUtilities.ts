export const BASE_URL = "http://localhost:5000/api";

export function statusToErrorMessage(status: number) {
  switch (status) {
    case 401:
      return "Please sigin again.";
    case 403:
      return "You do not have permission to view the data requested.";
    default:
      return "There was an error saving or retrieving data.";
  }
}

export async function checkStatus(response: Response) {
  if (response.ok) return response;

  const httpError = {
    status: response.status,
    statusText: response.statusText,
    url: response.url,
    body: await response.text(),
  };
  console.log(`http error status: ${JSON.stringify(httpError, null, 1)}`);

  let errorMessage = statusToErrorMessage(httpError.status);
  throw new Error(errorMessage);
}

export async function parseJSON(response: Response) {
  const text = await response.text();

  if (!text) {
    
    return null;
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    throw new Error("Invalid JSON response");
  }
}
// eslint-disable-next-line
export function delay(ms: number) {
  return function (x: any): Promise<any> {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}