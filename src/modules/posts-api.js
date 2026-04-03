import blogData from "../data/blog-data";
import { fetchWithRetry } from "./fetch-with-retry";
import throwError from "./throw-error";

const postsUrl = `${blogData.apiRootUrl}/posts/`;

export async function getPosts(page = 1, options = {}) {
  const response = await fetchWithRetry(
    `${postsUrl}?published=1&page=${page}`,
    options,
  );

  if (!response.ok) {
    await throwError(response);
  }

  return response.json();
}
