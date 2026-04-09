import siteData from "../data/site-data";

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const { copyright, githubRepo, githubLabel } = siteData.footer;

    this.innerHTML = `
      <footer class="pb-5 text-white md:text-center lg:pb-8">
        <p
          class="footer-pill"
        >
          ${copyright}
          <a
            href="${githubRepo}"
            class="text-blue-200 underline"
            >${githubLabel}</a
          >
        </p>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
