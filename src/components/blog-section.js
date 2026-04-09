import blogData from "../data/blog-data";
import { getPosts } from "../modules/posts-api";

const MAX_POSTS = 5;
const postDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const escapeHtml = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      (
        {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }
      )[character] ?? character,
  );

const getDateParts = (value) => {
  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return {
    iso: parsedDate.toISOString(),
    display: postDateFormatter.format(parsedDate),
  };
};

const getPostUrl = (uri) => {
  if (typeof uri !== "string" || uri.trim() === "") {
    return blogData.rootUrl;
  }

  try {
    const url = new URL(uri, blogData.rootUrl);

    if (url.protocol === "http:" || url.protocol === "https:") {
      return url.href;
    }
  } catch {
    // Fall through to the blog root URL below.
  }

  return blogData.rootUrl;
};

class BlogSection extends HTMLElement {
  connectedCallback() {
    this.abortController = new AbortController();
    this.render();
    this.loadPosts();
  }

  disconnectedCallback() {
    this.abortController?.abort();
  }

  render() {
    this.innerHTML = `
      <section class="separator flex flex-col pb-20" id="blog">
        <h2 class="mb-10">${blogData.sectionTitle}</h2>
        <p
          class="blog-state"
          id="blog-status"
          role="status"
          aria-live="polite"
        >
          ${blogData.loadingMessage}
        </p>
        <div id="blog-posts" hidden></div>
        <a
          class="cta-button cta-button--primary mt-15 self-center text-xl lg:text-3xl"
          href="${blogData.rootUrl}"
        >
          ${blogData.archiveLabel}
        </a>
      </section>
    `;
  }

  async loadPosts() {
    const statusEl = this.querySelector("#blog-status");
    const postsContainer = this.querySelector("#blog-posts");

    if (!statusEl || !postsContainer) {
      return;
    }

    try {
      const { posts: fetchedPosts = [] } = await getPosts(1, {
        signal: this.abortController?.signal,
      });

      if (!this.isConnected) {
        return;
      }

      const posts = Array.isArray(fetchedPosts) ? fetchedPosts : [];
      const latestPosts = posts.slice(0, MAX_POSTS);

      if (latestPosts.length === 0) {
        statusEl.textContent = blogData.emptyMessage;
        return;
      }

      postsContainer.innerHTML = latestPosts
        .map((post) => this.renderPostCard(post))
        .join("");
      postsContainer.hidden = false;
      statusEl.remove();
    } catch (error) {
      if (error?.name === "AbortError" || !this.isConnected) {
        return;
      }

      console.error("Failed to load latest posts.", error);
      statusEl.textContent = blogData.errorMessage;
    }
  }

  renderPostCard(post) {
    const title = escapeHtml(post?.title || "Untitled post");
    const subtitle = escapeHtml(post?.subtitle || "");
    const postUrl = getPostUrl(post?.uri);
    const dateParts = getDateParts(post?.createdAt);
    const categoryNames = (post?.categories ?? [])
      .map((category) =>
        typeof category?.name === "string" ? category.name.trim() : "",
      )
      .filter(Boolean)
      .map((name) => escapeHtml(name))
      .join(", ");

    const metaParts = [];

    if (dateParts) {
      metaParts.push(
        `<time datetime="${dateParts.iso}">${dateParts.display}</time>`,
      );
    }

    if (categoryNames) {
      metaParts.push(`<span>${categoryNames}</span>`);
    }

    return `
      <article>
        <a href="${postUrl}">
          <h3>${title}</h3>
          ${
            metaParts.length > 0
              ? `<p class="blog-card__meta">${metaParts.join('<span class="blog-card__separator" aria-hidden="true">&bull;</span>')}</p>`
              : ""
          }
          ${subtitle ? `<p class="blog-card__subtitle">${subtitle}</p>` : ""}
        </a>
      </article>
    `;
  }
}

customElements.define("blog-section", BlogSection);
