export default async function throwError(response) {
  let message = `Request failed with status ${response.status}`;

  try {
    const errorData = await response.json();
    message = errorData?.error?.message ?? errorData?.message ?? message;
  } catch {
    // Fall back to the default message when the response body is not JSON.
  }

  throw new Error(message);
}
