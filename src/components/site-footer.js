import siteData from "../data/site-data";

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const { copyright, githubRepo, githubLabel } = siteData.footer;

    this.innerHTML = `
      <footer class="pb-5 text-white md:text-center lg:pb-8">
        <p
          class="contact-button bg-slate-500 py-1.5 text-xs lg:py-3 lg:text-base"
        >
          ${copyright}
          <a
            href="${githubRepo}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-200 underline"
            >${githubLabel}</a
          >
        </p>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
