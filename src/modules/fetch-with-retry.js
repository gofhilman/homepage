const RETRYABLE_STATUSES = new Set([502, 503, 504]);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchWithRetry(url, options = {}, retries = 3) {
  let lastError;
  let lastResponse;

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, options);

      if (!RETRYABLE_STATUSES.has(response.status)) {
        return response;
      }

      lastResponse = response;
      lastError = new Error(`Server not ready: ${response.status}`);
    } catch (error) {
      if (error?.name === "AbortError") {
        throw error;
      }

      lastError = error;
    }

    if (attempt < retries) {
      console.warn(
        `Attempt ${attempt} failed. ${retries - attempt} retries left...`,
      );
      await sleep(attempt * 500);
    }
  }

  if (lastResponse) {
    return lastResponse;
  }

  throw lastError ?? new Error("Request failed");
}
